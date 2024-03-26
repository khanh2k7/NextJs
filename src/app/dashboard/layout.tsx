'use client';
import * as React from 'react';
import { Header } from '@/app/dashboard/layout/Header';
import { Sidebar } from '@/app/dashboard/layout/Sidebar';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="main">
      {' '}
      <Header toggleDrawer={toggleDrawer(true)} />
      <Sidebar open={open} toggleDrawer={toggleDrawer(false)} />
      {children}
    </div>
  );
}
