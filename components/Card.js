import Image from 'next/image';

export default function Card({ src, children }) {
  return (
    <article>
      <figure className="relative max-w-xs cursor-pointer">
        <img
          className="rounded-lg shadow-xl hover:shadow-2xl"
          src={src}
          alt="random img"
        />
        {/* <img
          className="rounded-lg shadow-xl hover:shadow-2xl"
          src={thumbnail}
          alt="random img"
        /> */}
        <figcaption className="absolute text-lg -mt-16 text-white px-4">
          {children}
        </figcaption>
      </figure>
    </article>
  );
}
