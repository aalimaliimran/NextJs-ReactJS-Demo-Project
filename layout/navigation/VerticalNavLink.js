// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'

// ** Configs Import
import themeConfig from '/layout/components/themeConfig'

// ** Util Import
import { handleURLQueries } from '/layout/components/utils'
import ListItemIcon from '@mui/material/ListItemIcon'


// ** Styled Components
const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  borderRadius: 8,
  transition: 'padding-left .25s ease-in-out',
  '&.active': {
    '&, &:hover': {
      backgroundColor: '#787EFF',
      '&.Mui-focusVisible': {
        backgroundColor: '#666CFF'
      }
    },
    '& .MuiTypography-root': {
      fontWeight: 500,
      color: `#FFF !important`
    },
    '& .MuiListItemIcon-root': {
      color: `#FFF !important`
    }
  }
}))

const MenuItemTextMetaWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const VerticalNavLink = ({
  item,
  parent,
  navHover,
  settings,
  navVisible,
  isSubToSub,
  collapsedNavWidth,
  toggleNavVisibility,
  navigationBorderWidth
}) => {
  // ** Hooks
  const theme = useTheme()
  const router = useRouter()

  // ** Vars
  const { navCollapsed } = settings
  const icon = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  return (

      <ListItem
        disablePadding
        className='nav-link'
        disabled={item.disabled || false}
        sx={{
          mt: 1,
          transition: 'padding .25s ease-in-out',
          px: parent ? '0 !important' : `${navCollapsed && !navHover ? '0.5rem' : '0.75rem'} !important`
        }}
      >
        <MenuNavLink
          component={Link}
          {...(item.disabled && { tabIndex: -1 })}
          className={isNavLinkActive() ? 'active' : ''}
          href={item.path === undefined ? '/' : `${item.path}`}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            py: 1,
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
            pr: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 3,
            pl: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 16 : 1.5
          }}
        >
           {isSubToSub ? null : (
            <ListItemIcon
              sx={{
      
                transition: 'margin .25s ease-in-out',
                ...(navCollapsed && !navHover ? { mr: 0 } : { mr: 2 }),
                ...(parent ? { ml: 1, mr: 1 } : {}),
                '& svg': {
                  ...(!parent ? { fontSize: '1.5rem' } : { fontSize: '0.5rem' }),
                  ...(parent && item.icon ? { fontSize: '0.875rem' } : {})
                }
              }}
            >
          
              {icon} 
            </ListItemIcon>
          )}

          <MenuItemTextMetaWrapper
            sx={{
              ...(isSubToSub ? { ml: 8 } : {}),
              ...(navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 })
            }}
          >
            <Typography
              {...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                noWrap: true
              })}
            >
             {item.title}
            </Typography>
            {item.badgeContent ? (
              <Chip
                size='small'
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{ ml: 1.5, '& .MuiChip-label': { px: 2.5, lineHeight: 1.385, textTransform: 'capitalize' } }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </ListItem>
  
  )
}

export default VerticalNavLink
