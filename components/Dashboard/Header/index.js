import React, { useEffect, useState } from 'react'
import NotificationBell from '../../../components/Common/UI/NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import { headerStyles } from './styles';
import {useRouter} from 'next/router';

const Header = () => {

    const [title, setTitle] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
       const routerPathLastIndex = router.pathname.split("/").pop();
      const parsedTitle =  routerPathLastIndex.replace(/\W/g, ' ');
      setTitle(parsedTitle);
    }, [router]);

    return (
     <header className='dashboard_header'>
        <div className='row'>
            <div className='col-xl-4 flex_col left_left'>
                <h1>{title}</h1>
            </div>
            <div className='col-xl-8 flex_col right_col'>
            <NotificationBell/>
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                <Tooltip title="Help">
                    <IconButton sx={headerStyles.helpIcon}>
                        <HelpIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
        </header>   
    )
}

export default Header
