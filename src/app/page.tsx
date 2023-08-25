import Guide from '@/components/guide/guide';
import LoadingScreen from '@/components/player/loading-screen';
import Player from '@/components/player/player';

const Home = async () => (
  <>
    <LoadingScreen />
    <Player />
    <Guide />
  </>
);

export default Home;
