const Player = () => {
  return (
    <>
      <div className='outline outline-2 outline-green-500 relative flex justify-center'>
        <div className='max-w-[1700px] w-full select-none pointer-events-none mobile:min-h-[100px] desktop:grow'>
          <iframe
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            title='YouTube video player'
            allowFullScreen={true}
            allow='autoplay'
            className='border-0 aspect-video w-full h-full block m-auto'
          />
        </div>
      </div>
    </>
  );
};

export default Player;
