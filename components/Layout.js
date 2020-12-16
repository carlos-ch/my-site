import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ title, children }) {
  return (
    <div className="bg-red-300 h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className=" pt-32 container mx-auto max-w-xl">{children}</main>
    </div>
  );
}
