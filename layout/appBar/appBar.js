// ** MUI Imports
import Toolbar from '@mui/material/Toolbar'

const LayoutAppBar = props => {
  // ** Props
  const { appBarContent: userAppBarContent } = props
  
  return (
      <Toolbar className='navbar-content-container'>
        {(userAppBarContent && userAppBarContent(props)) || null}
      </Toolbar>
  )
}

export default LayoutAppBar
