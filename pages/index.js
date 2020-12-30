import Layout from '../components/Layout';
import Link from 'next/link';

const iconsOriginal = [
  'nodejs',
  'express',
  'react',
  'redux',
  'babel',
  'postgresql',
  'amazonwebservices',
  'docker',
  'heroku',
  'gatsby',
  'git',
];

const iconsPlain = ['javascript', 'mongodb', 'mocha'];

export default function Home() {
  return (
    <Layout title="My Site">
      <h1 className="text-6xl font-heading font-bold sm:text-8xl">
        Welcome to lorem my site!
      </h1>
      <p className="my-8">
        This is Lorem, a passionate and infinitely curious full stack developer.
        I enjoy finding solitions for challenges, puzzles and hacking everyday
        tasks.
      </p>
      <div>
        <p>Some of the technologies under my toolbelt </p>
        <article className="flex flex-wrap mt-12">
          {iconsOriginal.map(icon => {
            return (
              <img
                className="w-16 h-16 "
                src={`https://devicons.github.io/devicon/devicon.git/icons/${icon}/${icon}-original.svg`}
                alt={icon}
              />
            );
          })}
          {iconsPlain.map(icon => {
            return (
              <img
                className="w-16 h-16"
                src={`https://devicons.github.io/devicon/devicon.git/icons/${icon}/${icon}-plain.svg`}
                alt={icon}
              />
            );
          })}
        </article>
      </div>
    </Layout>
  );
}
