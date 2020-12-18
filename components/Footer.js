const links = [
  { href: 'https://github.com/carlos-ch', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/carlos-c-g/', label: 'LinkedIn' },
  { href: 'https://twitter.com/carloselchavez', label: 'Twitter' },
];

export default function Footer() {
  return (
    <div className="absolute w-full text-gray-text bg-gray-200 px-8 py-6 bottom-0">
      <dl className="flex justify-center  sm:float-right  mt-8 mb-12">
        {links.map(({ href, label }) => (
          <dt className="inline-block mx-spaced sm:mr-8">
            <a
              className={`block w-8 h-7 bg-social bg-${label}`}
              href={href}
            ></a>
          </dt>
        ))}
      </dl>
      <p className="text-base mb-12">
        <a className="default" href="mailto:hello@mail.com">
          hello@mail.com
        </a>
        <br />
        <a className="default" href="tel:0090123000">
          +90 (123) 000
        </a>
        <br />
        Worldwide 
      </p>
      <small>CCreat © 2020</small>
    </div>
  );
}
