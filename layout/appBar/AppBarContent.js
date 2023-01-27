// ** MUI Imports

import IconButton from '@mui/material/IconButton'


const AppBarContent = props => {
  // ** Props
  const { hidden, toggleNavVisibility } = props

  return (
<>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" fontSize="1.5rem" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"></path></svg>
          </IconButton>
        ) : null}
</>
        
  
  )
}

export default AppBarContent
