import React from 'react';
import IconButton from '@mui/material/IconButton';

type ButtonType = {
    toggleDrawer: (mmyopen: boolean) => void,
    children: React.ReactNode
}
export const DrawerButton: React.FC<ButtonType> = ({ toggleDrawer, children }) => {
  return (
    <IconButton tabIndex={0} onClick={() => toggleDrawer(true)}>{children}</IconButton>
  );
};
