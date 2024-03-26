import * as React from 'react';
import { Header } from '@/app/dashboard/layout/Header';
import { Sidebar } from '@/app/dashboard/layout/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dev by Juno',
};
export default function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <div> Hello Boi</div>
    </>
  );
}
