import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ title, children }) {
  return (
    <div className="bg-indigo-50 min-h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className=" pt-32 px-4 container text-gray-text text-center webfont-2e6c8aa1b81be890899b2183047c5d1f">
        {children}
      </main>
    </div>
  );
}
