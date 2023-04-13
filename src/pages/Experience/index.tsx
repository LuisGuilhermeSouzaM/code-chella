import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import BannerElement from "../../assets/BannerExperience.png";
import ImgAccessibility from "../../assets/imgAccessibility.png";
import ImgSustainability from "../../assets/imgSustainability.png";
import ImgAttractions from "../../assets/imgAttractions.png";

export function Experience() {
  return (
    <div>
      <Navbar />
      <img src={BannerElement} alt="" className="w-full" />

      <div className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-wrap justify-around items-center">
          <img
            src={ImgAccessibility}
            alt=""
            className="max-w-lg w-10/12 my-8"
          />
          <div className="flex flex-col text-center w-4/5 lg:w-2/5 lg:text-left">
            <h1 className="text-4xl md:text-4xl font-sans mb-6">
              Acessibilidade e Inclusão
            </h1>
            <p className="text-lg leading-9">
              Nosso evento tenta abraçar um público mais amplo em todos os
              sentidos, de todas as idades, corpos, gostos e pensamentos! Isso
              está presente no espaço físico, na sinalização, no treinamento da
              equipe de apoio, na comunicação em libras, braile, visual e tátil.
              Além disso, dispomos de ingressos gratuitos para pessoas com
              deficiência e acompanhantes, pessoas idosas e crianças!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap-reverse justify-around items-center">
          <div className="flex flex-col text-center w-4/5 lg:w-2/5 lg:text-right">
            <h1 className="text-4xl md:text-4xl font-sans mb-6">
              Sustentabilidade
            </h1>
            <p className="text-lg leading-9">
              Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
              levamos o futuro do nosso planeta a sério. Nosso festival é
              carbono zero, com utilização de copos retornáveis, coleta e
              destinação adequada de resíduos, e transporte coletivo.
            </p>
          </div>
          <img
            src={ImgSustainability}
            alt=""
            className="max-w-lg w-10/12 my-8"
          />
        </div>

        <div className="flex flex-wrap justify-around items-center">
          <img src={ImgAttractions} alt="" className="max-w-lg w-10/12 my-8" />
          <div className="flex flex-col text-center w-4/5 lg:w-2/5 lg:text-left">
            <h1 className="text-4xl md:text-4xl font-sans mb-6">Atrações</h1>
            <p className="text-lg  leading-9">
              Intervenções artísticas e culturais para todos os gostos! Durante
              os intervalos dos shows, nossa experiência contará com recreação
              para crianças, oficina de cerâmica, origami, circo e aquarela!
              Além disso, nosso espaço contra com 3 praças de alimentação, roda
              gigante e outros brinquedos!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
