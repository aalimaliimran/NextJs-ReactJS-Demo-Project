import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarList = [
    {
        id: 0,
        icon: <PublicIcon />,
        label: 'Dashboard',
        route: '/dashboard',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Books',
        route: '',
        items: [
            {
                id: 1,
                icon: <DnsIcon />,
                label: "Books List",
                route: '/dashboard/books/books-list',
            },
            {
                id: 2,
                icon: <DnsIcon />,
                label: "View Books",
                route: '/dashboard/books/view-book',
            },
            {
                id: 3,
                icon: <DnsIcon />,
                label: "Add Books",
                route: '/dashboard/books/add-book',
            }
        ]
    },
    {
        id: 2,
        icon: <PeopleIcon />,
        label: 'Users',
        route: '',
        items: [
            {
                id: 1,
                icon: <DnsIcon />,
                label: "Users List",
                route: '/dashboard/users/users-list',
            },
            {
                id: 2,
                icon: <DnsIcon />,
                label: "View User",
                route: '/dashboard/users/view-user',
            },
            {
                id: 3,
                icon: <DnsIcon />,
                label: "Add User",
                route: '/dashboard/users/add-user',
            }
        ]
    },
    {
        id: 3,
        icon: <ImageIcon />,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 4,
        icon: <SettingsInputComponentIcon />,
        label: 'Functions',
        route: 'functions',
    },
    {
        id: 5,
        icon: <SettingsEthernetIcon />,
        label: 'Logout',
        route: '/',
    },
]