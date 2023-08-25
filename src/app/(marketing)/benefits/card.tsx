import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  image: string;
};
export function Card({ title, description, image }: CardProps) {
  return (
    <div className='flex h-[320px] w-full max-w-sm flex-col items-center rounded-md border border-primary-lighter duration-150 hover:border-white'>
      <div className='flex w-full items-center justify-center rounded-t-md bg-white'>
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <div className='px-6 py-4'>
        <div className='text-fs-500 mb-2 font-semibold'>{title}</div>
        <p className='text-primary-lighter'>{description}</p>
      </div>
    </div>
  );
}
