// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'

// ** Configs
import themeConfig from '/layout/components/themeConfig'
import Typography from '@mui/material/Typography'

const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { direction, navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 40) / 16
      }
    } else {
      return 1.5
    }
  }

  const svgRotationDeg = () => {
    if (navCollapsed) {
      if (direction === 'rtl') {
        if (navHover) {
          return 0
        } else {
          return 180
        }
      } else {
        if (navHover) {
          return 180
        } else {
          return 0
        }
      }
    } else {
      if (direction === 'rtl') {
        return 180
      } else {
        return 0
      }
    }
  }
  
  const HeaderTitle = styled(Typography)({
      fontWeight: 700,
      lineHeight: 1.2,
      transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
  })

  return (
    <Box className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <Link className="styled_link" href='/'>
      <svg width={40} fill='none' height={22} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
            <rect
              rx='25.1443'
              width='50.2886'
              height='143.953'
              fill='#666CFF'
              transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
            />
            <rect
              rx='25.1443'
              width='50.2886'
              height='143.953'
              fillOpacity='0.4'
              fill='url(#paint0_linear_7821_79167)'
              transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
            />
            <rect
              rx='25.1443'
              width='50.2886'
              height='143.953'
              fill='#666CFF'
              transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
            />
            <rect
              rx='25.1443'
              width='50.2886'
              height='143.953'
              fill='#666CFF'
              transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
            />
            <rect
              rx='25.1443'
              width='50.2886'
              height='143.953'
              fillOpacity='0.4'
              fill='url(#paint1_linear_7821_79167)'
              transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
            />
            <rect
              rx='25.1443'
              width='50.2886'
              height='143.953'
              fill='#666CFF'
              transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
            />
            <defs>
              <linearGradient
                y1='0'
                x1='25.1443'
                x2='25.1443'
                y2='143.953'
                id='paint0_linear_7821_79167'
                gradientUnits='userSpaceOnUse'
              >
                <stop />
                <stop offset='1' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                y1='0'
                x1='25.1443'
                x2='25.1443'
                y2='143.953'
                id='paint1_linear_7821_79167'
                gradientUnits='userSpaceOnUse'
              >
                <stop />
                <stop offset='1' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
          <HeaderTitle variant='h6' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2 }) }}>
            {themeConfig.templateName}
          </HeaderTitle>
        </Link>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="20" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path></svg>

        </IconButton>
      ) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{ p: 0, color: 'text.primary', backgroundColor: 'transparent !important' }}
        >
          {userMenuLockedIcon && userMenuUnlockedIcon ? (
            navCollapsed ? (
              userMenuUnlockedIcon
            ) : (
              userMenuLockedIcon
            )
          ) : (
            <svg
              className='desktop_left_sidebar_close_icon'
              viewBox='0 0 22 22'
              xmlns='http://www.w3.org/2000/svg'
              style={{transform: `rotate(${svgRotationDeg()}deg)`}}>
              <path
              
                d='M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z'
              />
              <path
                
                d='M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z'
              />
            </svg>
          )}
        </IconButton>
      )}
    </Box>
  )
}

export default VerticalNavHeader
