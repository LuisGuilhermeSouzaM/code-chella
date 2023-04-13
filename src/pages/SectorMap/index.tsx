import { Navbar } from "../../components/Navbar";
import { seatLegend } from "../../utils/database.json";

import BannerSectorMap from "../../assets/BannerSectorMap.png";
import SeatMap from "../../assets/SeatMap.png";
import ConventionalLane from "../../assets/SectorConventionalLane.png";
import PremiumLane from "../../assets/SectorPremiumLane.png";
import SectorChairs from "../../assets/SectorChairs.png";
import { Footer } from "../../components/Footer";

export function SectorMap() {
  return (
    <div>
      <Navbar />
      <img src={BannerSectorMap} alt="" className="w-full" />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <img src={SeatMap} alt="" className="max-w-lg w-3/4" />
          <div className="flex  flex-col">
            <h1 className="text-3xl font-sans mb-5">Legenda:</h1>
            {seatLegend.map((seating) => [
              <div className="flex items-center gap-4 my-2 " key={seating.name}>
                <div
                  style={{ height: 32, width: 32, background: seating.color }}
                />
                <h1 className="text-base md:text-lg  font-sans">
                  {seating.name}
                </h1>
              </div>,
            ])}
          </div>
        </div>

        <h1 className="text-xl md:text-3xl font-sans mt-14 mb-10">
          Mais detalhes sobre os setores:
        </h1>

        <div className="w-11/12 flex flex-wrap justify-center gap-6">
          <div className="w-96 flex flex-col text-center">
            <img src={ConventionalLane} alt="" />
            <h1 className="text-3xl py-5">Pista</h1>
            <p className="text-xl leading-9">
              Pista convencional, atendida pelos bares e banheiros das laterais
              do estádio. Espaço amplo, com local para sentar e descansar.
              Separada da pista premium por uma grade.
            </p>
          </div>
          <div className="w-96 flex flex-col text-center">
            <img src={PremiumLane} alt="" />
            <h1 className="text-2xl py-5">Pista Premium</h1>
            <p className="text-xl leading-9">
              Pista mais próxima do palco, com acesso muito próximo a banheiros
              e bares num raio de 100m. Todas as pessoas idosas e/ou com
              deficiência têm direito a acesso gratuito a essa área.
            </p>
          </div>
          <div className="w-96 flex flex-col text-center">
            <img src={SectorChairs} alt="" />
            <h1 className="text-2xl py-5">Cadeiras</h1>
            <p className="text-xl leading-9">
              Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros
              e bares, visão um pouco elevada em relação às pistas.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
