const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"></path></svg>,
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'Dashboard Home',
          path: '/dashboard'
        },
        {
          title: 'Acl',
          path: '/acl'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Email',
      
      //icon: 'mdi:email-outline',
       icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"></path></svg>,
      path: '/apps/email'
    },
    {
      title: 'Chat',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16v12Z"></path></svg>,
      path: '/apps/chat'
    },
    {
      title: 'Calendar',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14v10m0-12H5V5h14v2Z"></path></svg>,
      path: '/apps/calendar'
    },
    {
      title: 'Invoice',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"></path></svg>,
      children: [
        {
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          title: 'Preview',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Edit',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Add',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'User',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"></path></svg>,
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
        {
          title: 'View',
          children: [
            {
              title: 'Overview',
              path: '/apps/user/view/overview'
            },
            {
              title: 'Security',
              path: '/apps/user/view/security'
            },
            {
              title: 'Billing & Plans',
              path: '/apps/user/view/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/apps/user/view/notification'
            },
            {
              title: 'Connection',
              path: '/apps/user/view/connection'
            }
          ]
        }
      ]
    },
    {
      title: 'Roles & Permissions',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21Z"></path></svg>,
      children: [
        {
          title: 'Roles',
          path: '/apps/roles'
        },
        {
          title: 'Permissions',
          path: '/apps/permissions'
        }
      ]
    },
    {
      title: 'Pages',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"></path></svg>,
      children: [
        {
          title: 'User Profile',
          children: [
            {
              title: 'Profile',
              path: '/pages/user-profile/profile'
            },
            {
              title: 'Teams',
              path: '/pages/user-profile/teams'
            },
            {
              title: 'Projects',
              path: '/pages/user-profile/projects'
            },
            {
              title: 'Connections',
              path: '/pages/user-profile/connections'
            }
          ]
        },
        {
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: '/pages/account-settings/account'
            },
            {
              title: 'Security',
              path: '/pages/account-settings/security'
            },
            {
              title: 'Billing',
              path: '/pages/account-settings/billing'
            },
            {
              title: 'Notifications',
              path: '/pages/account-settings/notifications'
            },
            {
              title: 'Connections',
              path: '/pages/account-settings/connections'
            }
          ]
        },
        {
          title: 'FAQ',
          path: '/pages/faq'
        },
        {
          title: 'Help Center',
          path: '/pages/help-center'
        },
        {
          title: 'Pricing',
          path: '/pages/pricing'
        },
        {
          title: 'Miscellaneous',
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: '/pages/misc/coming-soon'
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: '/pages/misc/under-maintenance'
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: '/pages/misc/404-not-found'
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: '/pages/misc/401-not-authorized'
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: '/pages/misc/500-server-error'
            }
          ]
        }
      ]
    },
    {
      title: 'Auth Pages',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"></path></svg>,
      children: [
        {
          title: 'Login',
          children: [
            {
              openInNewTab: true,
              title: 'Login v1',
              path: '/pages/auth/login-v1'
            },
            {
              openInNewTab: true,
              title: 'Login v2',
              path: '/pages/auth/login-v2'
            },
            {
              openInNewTab: true,
              title: 'Login With AppBar',
              path: '/pages/auth/login-with-appbar'
            }
          ]
        },
        {
          title: 'Register',
          children: [
            {
              openInNewTab: true,
              title: 'Register v1',
              path: '/pages/auth/register-v1'
            },
            {
              openInNewTab: true,
              title: 'Register v2',
              path: '/pages/auth/register-v2'
            },
            {
              openInNewTab: true,
              title: 'Register Multi-Steps',
              path: '/pages/auth/register-multi-steps'
            }
          ]
        },
        {
          title: 'Verify Email',
          children: [
            {
              openInNewTab: true,
              title: 'Verify Email v1',
              path: '/pages/auth/verify-email-v1'
            },
            {
              openInNewTab: true,
              title: 'Verify Email v2',
              path: '/pages/auth/verify-email-v2'
            }
          ]
        },
        {
          title: 'Forgot Password',
          children: [
            {
              openInNewTab: true,
              title: 'Forgot Password v1',
              path: '/pages/auth/forgot-password-v1'
            },
            {
              openInNewTab: true,
              title: 'Forgot Password v2',
              path: '/pages/auth/forgot-password-v2'
            }
          ]
        },
        {
          title: 'Reset Password',
          children: [
            {
              openInNewTab: true,
              title: 'Reset Password v1',
              path: '/pages/auth/reset-password-v1'
            },
            {
              openInNewTab: true,
              title: 'Reset Password v2',
              path: '/pages/auth/reset-password-v2'
            }
          ]
        },
        {
          title: 'Two Steps',
          children: [
            {
              openInNewTab: true,
              title: 'Two Steps v1',
              path: '/pages/auth/two-steps-v1'
            },
            {
              openInNewTab: true,
              title: 'Two Steps v2',
              path: '/pages/auth/two-steps-v2'
            }
          ]
        }
      ]
    },
    {
      title: 'Wizard Examples',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9c-1.3 0-2.4.8-2.8 2H6.8C6.4 9.8 5.3 9 4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2h2.4c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h2.4c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2h-2.4c-.4-1.2-1.5-2-2.8-2m-9 3c0-.6.4-1 1-1s1 .4 1 1s-.4 1-1 1s-1-.4-1-1m18 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1Z"></path></svg>,
      children: [
        {
          title: 'Checkout',
          path: '/pages/wizard-examples/checkout'
        },
        {
          title: 'Property Listing',
          path: '/pages/wizard-examples/property-listing'
        },
        {
          title: 'Create Deal',
          path: '/pages/wizard-examples/create-deal'
        }
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 22c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h11m0-2H9V9h11v11M5 16v-2H3V3h11v2h2V3c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h2Z"></path></svg>,
      title: 'Dialog Examples',
      path: '/pages/dialog-examples'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.06 18a3.99 3.99 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05c.67-.49 1.61-.73 2.83-.73h1.4v-.64c0-.49-.15-.88-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18h-1.52m-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29l-2.04 5.42M6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93L6.64 6Z"></path></svg>,
      path: '/ui/typography'
    },
    {
      title: 'Icons',
      path: '/ui/icons',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m0-6a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m-6-1.9a1.9 1.9 0 0 0-1.9 1.9a1.9 1.9 0 0 0 1.9 1.9a1.9 1.9 0 0 0 1.9-1.9a1.9 1.9 0 0 0-1.9-1.9M6 19a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m0-6a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m6-9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m0 6a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"></path></svg>
    },
    {
      title: 'Cards',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8H4V6h16m0 12H4v-6h16m0-8H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path></svg>,
      children: [
        {
          title: 'Basic',
          path: '/ui/cards/basic'
        },
        {
          title: 'Advanced',
          path: '/ui/cards/advanced'
        },
        {
          title: 'Statistics',
          path: '/ui/cards/statistics'
        },
        {
          title: 'Widgets',
          path: '/ui/cards/widgets'
        },
        {
          title: 'Gamification',
          path: '/ui/cards/gamification'
        },
        {
          title: 'Actions',
          path: '/ui/cards/actions'
        }
      ]
    },
    {
      badgeContent: '18',
      title: 'Components',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 21H4V10h2v9h12v-9h2v11M3 3h18v6H3V3m6.5 8h5c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5M5 5v2h14V5H5Z"></path></svg>,
      badgeColor: 'primary',
      children: [
        {
          title: 'Accordion',
          path: '/components/accordion'
        },
        {
          title: 'Alerts',
          path: '/components/alerts'
        },
        {
          title: 'Avatars',
          path: '/components/avatars'
        },
        {
          title: 'Badges',
          path: '/components/badges'
        },
        {
          title: 'Buttons',
          path: '/components/buttons'
        },
        {
          title: 'Button Group',
          path: '/components/button-group'
        },
        {
          title: 'Chips',
          path: '/components/chips'
        },
        {
          title: 'Dialogs',
          path: '/components/dialogs'
        },
        {
          title: 'List',
          path: '/components/list'
        },
        {
          title: 'Menu',
          path: '/components/menu'
        },
        {
          title: 'Pagination',
          path: '/components/pagination'
        },
        {
          title: 'Ratings',
          path: '/components/ratings'
        },
        {
          title: 'Snackbar',
          path: '/components/snackbar'
        },
        {
          title: 'Swiper',
          path: '/components/swiper'
        },
        {
          title: 'Tabs',
          path: '/components/tabs'
        },
        {
          title: 'Timeline',
          path: '/components/timeline'
        },
        {
          title: 'Toasts',
          path: '/components/toast'
        },
        {
          title: 'Tree View',
          path: '/components/tree-view'
        },
        {
          title: 'More',
          path: '/components/more'
        },
      ]
    },
    {
      sectionTitle: 'Forms & Tables'
    },
    {
      title: 'Form Elements',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 5h3l-1.5 2L15 5M5 2h14a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h14V4H5m0 16h14V10H5v10m2-8h10v2H7v-2m0 4h10v2H7v-2Z"></path></svg>,
      children: [
        {
          title: 'Text Field',
          path: '/forms/form-elements/text-field'
        },
        {
          title: 'Select',
          path: '/forms/form-elements/select'
        },
        {
          title: 'Checkbox',
          path: '/forms/form-elements/checkbox'
        },
        {
          title: 'Radio',
          path: '/forms/form-elements/radio'
        },
        {
          title: 'Custom Inputs',
          path: '/forms/form-elements/custom-inputs'
        },
        {
          title: 'Textarea',
          path: '/forms/form-elements/textarea'
        },
        {
          title: 'Autocomplete',
          path: '/forms/form-elements/autocomplete'
        },
        {
          title: 'Date Pickers',
          path: '/forms/form-elements/pickers'
        },
        {
          title: 'Switch',
          path: '/forms/form-elements/switch'
        },
        {
          title: 'File Uploader',
          path: '/forms/form-elements/file-uploader'
        },
        {
          title: 'Editor',
          path: '/forms/form-elements/editor'
        },
        {
          title: 'Slider',
          path: '/forms/form-elements/slider'
        },
        {
          title: 'Input Mask',
          path: '/forms/form-elements/input-mask'
        },
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"></path></svg>,
      title: 'Form Layouts',
      path: '/forms/form-layouts'
    },
    {
      title: 'Form Validation',
      path: '/forms/form-validation',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.822 9.822 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10M7.91 10.08L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17l-3.09-3.09Z"></path></svg>
    },
    {
      title: 'Form Wizard',
      path: '/forms/form-wizard',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9c-1.3 0-2.4.8-2.8 2H6.8C6.4 9.8 5.3 9 4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2h2.4c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h2.4c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2h-2.4c-.4-1.2-1.5-2-2.8-2m-9 3c0-.6.4-1 1-1s1 .4 1 1s-.4 1-1 1s-1-.4-1-1m18 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1Z"></path></svg>
    },
    {
      title: 'Table',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2m0 2v7h7V4H4m0 16h7v-7H4v7m16 0v-7h-7v7h7m0-16h-7v7h7V4Z"></path></svg>,
      path: '/tables/mui'
    },
    {
      title: 'Mui DataGrid',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4v4h4V4h-4m6 0v4h4V4h-4m0 6v4h4v-4h-4m0 6v4h4v-4h-4m-2 4v-4h-4v4h4m-6 0v-4H4v4h4m0-6v-4H4v4h4m0-6V4H4v4h4m2 6h4v-4h-4v4M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2Z"></path></svg>,
      path: '/tables/data-grid'
    },
    {
      sectionTitle: 'Charts & Misc'
    },
    {
      title: 'Charts',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.5 2.54l2.62 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19a7 7 0 0 1-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95a10 10 0 0 0 10 10c3.3 0 6.23-1.61 8.05-4.09l-2.6-1.53A6.89 6.89 0 0 1 12 19Z"></path></svg>,
      children: [
        {
          title: 'Apex',
          path: '/charts/apex-charts'
        },
        {
          title: 'Recharts',
          path: '/charts/recharts'
        },
        {
          title: 'ChartJS',
          path: '/charts/chartjs'
        }
      ]
    },
    {
      title: 'Others',
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  role="img" fontSize="1.5rem"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"></path></svg>,
      children: [
        {
          title: 'Menu Levels',
          children: [
            {
              title: 'Menu Level 2.1'
            },
            {
              title: 'Menu Level 2.2',
              children: [
                {
                  title: 'Menu Level 3.1'
                },
                {
                  title: 'Menu Level 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Disabled Menu',
          disabled: true
        },
        {
          title: 'Raise Support',
          externalLink: true,
          openInNewTab: true,
          path: 'https://pixinvent.ticksy.com/'
        },
        {
          title: 'Documentation',
          externalLink: true,
          openInNewTab: true,
          path: 'https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/documentation'
        }
      ]
    }
  ]
}

export default navigation
