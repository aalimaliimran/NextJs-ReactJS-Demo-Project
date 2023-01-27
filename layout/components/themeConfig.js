const themeConfig = {
  // ** Layout Configs
  templateName: 'React Factory' /* App Name */,
  layout: 'vertical' /* vertical | horizontal */,
  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" fontSize="0.5rem" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path></svg>, /* Icon */
  verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 260 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 68 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  afterVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  beforeVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
}

export default themeConfig
