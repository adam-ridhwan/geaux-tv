import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='text-5xl'>Player Page</h1>
      </main>
    </>
  );
}
