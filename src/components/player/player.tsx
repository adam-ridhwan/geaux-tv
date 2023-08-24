import Video from '@/components/player/video';

const Player = () => {
  return (
    <>
      <div className='relative flex justify-center bg-black mobile:min-h-[100px] desktop:flex-grow'>
        <div className='pointer-events-none w-full max-w-[1700px] select-none bg-black'>
          <Video />
        </div>
      </div>
    </>
  );
};

export default Player;
