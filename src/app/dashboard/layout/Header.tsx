"use client";
import * as React from 'react';
import { DrawerButton } from '../components/DrawerButtonts';
import styles from './styles.module.css';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Avatar } from '@mui/material';
import SearchIcon from './icon/search-icon.svg';
import FlagVn from './icon/flag-vn.svg';
import Rang from './icon/rang.svg';
import UserIcon from './icon/user.svg';
import Setting from './icon/setting.svg';

type Bottontype = {
  toggleDrawer: (newOpen: boolean) => void;
}
export function Header({toggleDrawer} : Bottontype) {
  return (
    <AppBar className={styles['css-header']}>
      <Toolbar>
        <DrawerButton toggleDrawer={() => toggleDrawer(true)}>
          <Box component="span" className={styles['icon-navbar']}></Box>
        </DrawerButton>
        <Stack className={styles['css-muistack-header']}>
          <IconButton tabIndex={0}>
            <SearchIcon />
          </IconButton>
        </Stack>
        <Stack className={styles['css-1jkfhk6']}>
          <IconButton tabIndex={0} style={{ transform: 'none' }} className={styles['css-13be9o2']}>
            <FlagVn />
          </IconButton>
          <IconButton tabIndex={0} style={{ transform: 'none' }} className={styles['css-13be9o2']}>
            <Rang />
          </IconButton>
          <IconButton tabIndex={0} style={{ transform: 'none' }} className={styles['css-13be9o2']}>
            <UserIcon />
          </IconButton>
          <IconButton tabIndex={0} style={{ transform: 'none' }} className={styles['css-13be9o2']}>
            <Setting />
          </IconButton>
          <IconButton
            tabIndex={0}
            style={{ transform: 'none', boxSizing: 'border-box' }}
            className={styles['css-13be9o2']}
          >
            <Avatar src="/assets/images/avatar/avatar_25.jpg" className={styles['css-avt-header-bodder']} alt="logo" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}