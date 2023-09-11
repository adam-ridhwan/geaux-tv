import { ReactNode } from 'react';

import LoadingScreen from '@/components/ui/loading-screen';
import AgeConfirmationPopup from '@/components/guide/age-confirmation-popup';
import Guide from '@/components/guide/guide';
import LogOutToaster from '@/components/header/log-out-toaster';

export default function TvLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <AgeConfirmationPopup />
      {children}
      <Guide />
      <LogOutToaster />
    </>
  );
}
