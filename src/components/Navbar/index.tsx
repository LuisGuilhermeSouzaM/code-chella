import Hamburger from "hamburger-react";
import { useState } from "react";

import Logo from "../../assets/Logo.png";

export function Navbar() {
  const [Open, setOpen] = useState(false);

  function ClickLink() {
    setOpen(!Open);
  }

  const Link = [
    { name: "A experiência", url: "/experiencia" },
    { name: "Mapa de Setores", url: "/setores" },
    { name: "Informações", url: "/informacoes" },
    { name: "Ingresso", url: "/compraringresso" },
  ];

  return (
    <nav className="bg-Highlight flex items-center md:flex-col lg:flex-row lg:justify-between py-2 px-4 sm:px-10">
      <a href="/">
        <img src={Logo} alt="" className="w-full" />
      </a>

      <div className="z-20 fixed right-5 cursor-pointer sm:hidden">
        <Hamburger size={20} toggled={Open} toggle={setOpen} direction="left" />
      </div>

      <ul
        className={`rounded-tl-lg backdrop-blur-lg z-10 md:static fixed top-0 pt-16 md:pt-0 md:h-auto h-screen duration-300 ease-linear ${
          !Open ? "right-[-100%]" : "right-0"
        }`}
      >
        {Link.map((link) => (
          <li
            key={link.url}
            className="md:inline-block md:ml-8 ml-5 mr-10 md:mr-0 border-transparent duration-300 "
          >
            <a
              href={link.url}
              className="text-base py-2 md:py-5 lg:py-0 inline-block hover:underline"
              onClick={ClickLink}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
