import Guide from '@/components/guide/guide';
import LogOutToaster from '@/components/header/log-out-toaster';
import LoadingScreen from '@/components/player/loading-screen';
import Player from '@/components/player/player';

const Home = async () => (
  <>
    <LoadingScreen />
    <Player />
    <Guide />
    <LogOutToaster />
  </>
);

export default Home;
