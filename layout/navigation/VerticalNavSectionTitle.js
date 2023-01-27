// ** MUI Imports
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import MuiListSubheader from '@mui/material/ListSubheader'

// ** Styled Components
const ListSubheader = styled(props => <MuiListSubheader component='li' {...props} />)(() => ({
  lineHeight: 1,
  display: 'flex',
  position: 'static',
  padding: '0.75rem',
  marginTop: '1.5625rem',
  backgroundColor: 'transparent',
  color: 'rgba(0, 0, 0, 0.38)',
  transition: 'padding-left .25s ease-in-out'
}))

const VerticalNavSectionTitle = props => {
  // ** Props
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } = props

  // ** Hook
  const theme = useTheme()
  
  // ** Vars
  const { navCollapsed } = settings


  return (

      <ListSubheader
        className='nav-section-title'
        sx={{
          ...(navCollapsed && !navHover
            ? { py: 1.75, px: (collapsedNavWidth - navigationBorderWidth - 22) / 16 }
            : { pl: 0 })
        }}
      >
        <Divider
          textAlign='left'
          sx={{
            m: '0 !important',
            lineHeight: 'normal',
            '&:after': { display: 'none' },
            ...(navCollapsed && !navHover
              ? { width: 22 }
              : {
                  width: '100%',
                  '&:before': { top: 7, transform: 'none', width: '1rem' },
                  '& .MuiDivider-wrapper': { px: 2, fontSize: '0.75rem', letterSpacing: '0.21px' }
                })
          }}
        >
          {navCollapsed && !navHover ? null : (
            <Typography noWrap variant='caption'>
              {item.sectionTitle}
            </Typography>
          )}
        </Divider>
      </ListSubheader>
 
  )
}

export default VerticalNavSectionTitle
