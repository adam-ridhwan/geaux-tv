import { data } from '@/database';

const CHANNEL_CATEGORIES = [...Object.keys(data).map(channel => channel), 'Favorites'];
const TV_DATA = Object.entries(data);

const Guide = () => {
  return (
    <>
      <div className='outline outline-2 outline-red-500 h-full relative bg-mauve-2 pb-[30px] flex flex-col gap-[10px] overflow-hidden'>
        {CHANNEL_CATEGORIES.map(category => {
          return <div key={category}>{category}</div>;
        })}
      </div>
    </>
  );
};

export default Guide;
