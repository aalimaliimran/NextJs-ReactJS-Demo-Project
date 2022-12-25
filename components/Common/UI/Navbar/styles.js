export const navbarStyles = {
    drawer: {
        svg: {
            color: 'rgba(255, 255, 255, 0.7)'
        },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
        '& .MuiListItem-root': {
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
        },
        
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};