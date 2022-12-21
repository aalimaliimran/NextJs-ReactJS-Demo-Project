import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({ anchorel, handleClose, open, menuItems }) => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorel}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
 
    )
}

export default BasicMenu
