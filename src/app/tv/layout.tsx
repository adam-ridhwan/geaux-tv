import { ReactNode } from 'react';

import LoadingScreen from '@/components/ui/loading-screen';
import Guide from '@/components/guide/guide';
import LogOutToaster from '@/components/header/log-out-toaster';

export default function TvLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      {children}
      <Guide />
      <LogOutToaster />
    </>
  );
}
