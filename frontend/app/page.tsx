import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../index'), { ssr: true });

export default function Home() {
  return <LandingPage />;
}
