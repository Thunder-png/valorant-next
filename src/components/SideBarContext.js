import React from 'react';

const SideBarContext = React.createContext({
    isOpen: false,
    toggleSideBar: () => { }
});

export default SideBarContext;
