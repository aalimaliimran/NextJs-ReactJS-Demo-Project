// ** React Import
import { useRef, useState } from 'react'

// ** MUI Import
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import themeConfig from '/layout/components/themeConfig'

// ** Component Imports
import Drawer from './Drawer'
import VerticalNavItems from './VerticalNavItems'
import VerticalNavHeader from './VerticalNavHeader'



const StyledBoxForShadow = styled(Box)(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  '&.scrolled': {
    opacity: 1
  }
}))

const Navigation = props => {
  // ** Props
  const { hidden, settings, afterNavMenuContent, beforeNavMenuContent, navMenuContent: userNavMenuContent } = props

  // ** States
  const [navHover, setNavHover] = useState(false)
  const [groupActive, setGroupActive] = useState([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState([])

  // ** Ref
  const shadowRef = useRef(null) 

  // ** Var
  const { afterVerticalNavMenuContentPosition, beforeVerticalNavMenuContentPosition } = themeConfig

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = ref => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect
      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) {
      container = hidden ? container.target : container
      if (shadowRef && container.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef.current.classList.contains('scrolled')) {
          // @ts-ignore
          shadowRef.current.classList.add('scrolled')
        }
      } else {
        // @ts-ignore
        shadowRef.current.classList.remove('scrolled')
      }
    }
  }

  
  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Drawer {...props} navHover={navHover} setNavHover={setNavHover}>
      <VerticalNavHeader {...props} navHover={navHover} />
      {beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'fixed' ? beforeNavMenuContent(props) : null}
      {(beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) && (
        <StyledBoxForShadow ref={shadowRef}  />
      )}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <ScrollWrapper
          {...(hidden
            ? {
                onScroll: container => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: container => scrollMenu(container),
                containerRef: ref => handleInfiniteScroll(ref)
              })}
        >
          {beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'static'
            ? beforeNavMenuContent(props)
            : null}
          {userNavMenuContent ? (
            userNavMenuContent(props)
          ) : (
            <List className='nav-items' sx={{ pt: 0, '& > :first-child': { mt: '0' } }}>
              <VerticalNavItems
                navHover={navHover}
                groupActive={groupActive}
                setGroupActive={setGroupActive}
                currentActiveGroup={currentActiveGroup}
                setCurrentActiveGroup={setCurrentActiveGroup}
                {...props}
              />
            </List>
          )}
          {afterNavMenuContent && afterVerticalNavMenuContentPosition === 'static' ? afterNavMenuContent(props) : null}
        </ScrollWrapper>
      </Box>
      {afterNavMenuContent && afterVerticalNavMenuContentPosition === 'fixed' ? afterNavMenuContent(props) : null}
    </Drawer>
  )
}

export default Navigation
