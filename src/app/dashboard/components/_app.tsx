import { AppProps } from 'next/app';
import { SidebarProvider } from './SidebarContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}

export default MyApp;
