import { Instagram, WhatsApp, Twitter } from "@mui/icons-material";

import Logo from "../../assets/Logo.png";

export function Footer() {
  return (
    <div className="bg-Highlight flex flex-col items-center lg:flex-row lg:justify-between  py-10 px-12">
      <div>
        <img src={Logo} alt="" />
        <div className="flex items-center gap-2 py-7 lg:py-0">
          <h1>Acesse nossas redes: </h1>
          <Instagram />
          <WhatsApp />
          <Twitter />
        </div>
      </div>

      <div className="flex text-sm md:text-lg gap-4 lg:flex-col lg:gap-0">
        <p>Desenvolvido por <a href="https://github.com/luisgmunhoz" className="underline text-blue-300 hover:text-blue-400 visited:text-purple-300">luisgmunhoz</a>.</p>
        <p>Design por Alura</p>
        <p> Projeto fictício sem fins comerciais.</p>
      </div>
    </div>
  );
}
