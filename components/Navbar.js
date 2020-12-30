import NavButton from './NavButton';

export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white border-b-2 border-gray-300 text-gray-900 z-50">
        <div className="container font-display mx-auto flex justify-between">
          <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">
            CC
          </div>
          <ul className="flex">
            <NavButton toPage="/">Home</NavButton>
            <NavButton toPage="/nav/about">About</NavButton>
            <NavButton toPage="/nav/projects">Projects</NavButton>
            <NavButton toPage="/nav/contact">Contact</NavButton>
          </ul>
        </div>
      </nav>
    </div>
  );
}
