import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
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
        route: '/dashboard/books',
    },
    {
        id: 2,
        icon: <PeopleIcon />,
        label: 'Users',
        route: '/dashboard/users',
    },
    {
        id: 3,
        icon: <ImageIcon />,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Functions',
        route: 'functions',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Machine learning',
        route: 'machine-learning',
    },
]