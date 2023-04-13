import LocalActivity from "@mui/icons-material/LocalActivity";

import BannerBoreal from "../../assets/BannerBoreal.png";
import BannerLineUp from "../../assets/BannerLineUp.png";
import FestivalBanner from "../../assets/FestivalBanner.png";

import { CardDate } from "../../components/CardDate";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { SaturdaySingers, SingersSunday } from "../../utils/database.json";

export function Home() {
  return (
    <div>
      <Navbar />
      <img src={BannerBoreal} alt="" className="w-full " />

      <div className="flex flex-wrap justify-around items-center mt-16">
        <img src={BannerLineUp} alt="" className="max-w-xl w-11/12" />
        <div className="flex flex-col items-center text-center  w-[35rem]">
          <h1 className="text-2xl font-bold">
            &lt; 11 e 12 de Março &gt; <br />
            Aluródromo de São Paulo
          </h1>
          <p className="font-sans my-6">
            Hora de programar nossa memória com novas lembranças! Uma nova
            experiência sobre música, linguagens e, claro, tecnologia! Somos um
            festival diverso, com vários artistas e referências. Divirta-se!
          </p>
          <a
            href=""
            className="h-14 w-64 rounded-2xl bg-Highlight flex items-center justify-center gap-2 hover:brightness-90"
          >
            Comprar ingresso! <LocalActivity />
          </a>
        </div>
      </div>

      <div className="text-center my-16 ">
        <h1 className="text-5xl font-bold"> /Line-Up/ </h1>
        <div className="flex flex-col items-center justify-center ">
          <CardDate textDate="SÁBADO &lt;11/03&gt;" />
          <h1 className="text-4xl mb-8">System of a DOM</h1>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-5 text-center">
            {SaturdaySingers.map((Singers) => {
              return (
                <h1 className="text-2xl lg:text-xl leading-tight">
                  {Singers.name}
                </h1>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <CardDate textDate="DOMINGO &lt;12/03&gt;" />
          <h1 className="text-4xl mb-8">Lana Del Play</h1>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-5 text-center">
            {SingersSunday.map((Singers) => {
              return (
                <h1 className="text-2xl lg:text-xl leading-tight">
                  {Singers.name}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
      <img src={FestivalBanner} alt="" className="w-full " />
      <Footer />
    </div>
  );
}
