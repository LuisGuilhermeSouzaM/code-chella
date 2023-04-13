import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import GeneralInformation from "../../assets/BannerGeneralInformation.png";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export function Information() {
  return (
    <div>
      <Navbar />
      <img src={GeneralInformation} alt="" className="w-full" />

      <div className="flex justify-center items-center">
        <div className="flex  flex-col gap-2 max-w-5xl w-11/12 pb-10">
          <h1 className="text-3xl md:text-5xl text-center py-12">
            Perguntas Frequentes:
          </h1>

          <details>
            <summary className="bg-Highlight flex justify-between p-4 list-none">
              Quais serão as atrações?
              <ArrowDropDownIcon />
            </summary>
            <p className="bg-AccordionDescription text-gray-700 leading-7 p-4">
              Teremos dois dias de shows, o primeiro (11/03) com bandas de rock,
              e o segundo (12/03) com bandas pop.&nbsp;
              <a href="http://localhost:5173/" className="underline text-blue-500 hover:text-blue-600 visited:text-purple-700">
                Confira o line-up em detalhes clicando neste link!
              </a>
            </p>
          </details>

          <details>
            <summary className="bg-Highlight flex justify-between p-4 list-none">
              Quais serão as atrações?
              <ArrowDropDownIcon />
            </summary>
            <p className="bg-AccordionDescription text-gray-700 leading-7 p-4">
              Teremos dois dias de shows, o primeiro (11/03) com bandas de rock,
              e o segundo (12/03) com bandas pop.&nbsp;
              <a href="http://localhost:5173/" className="underline text-blue-500 hover:text-blue-600 visited:text-purple-700">
                Confira o line-up em detalhes clicando neste link!
              </a>
            </p>
          </details>

          <details>
            <summary className="bg-Highlight flex justify-between p-4 list-none">
              Qual é a classificação etária?
              <ArrowDropDownIcon />
            </summary>
            <p className="bg-AccordionDescription text-gray-700 leading-7 p-4">
              A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem
              que estar acompanhado dos pais ou responsáveis legais. Menores de
              10 anos não podem entrar
            </p>
          </details>

          <details>
            <summary className="bg-Highlight flex justify-between p-4 list-none">
              Quais são os setores disponíveis?
              <ArrowDropDownIcon />
            </summary>
            <p className="bg-AccordionDescription text-gray-700 leading-7 p-4">
              Pista Premium, Pista Comum, Cadeiras térreo, Cadeiras superiores e
              Rampas
            </p>
          </details>

          <details>
            <summary className="bg-Highlight flex justify-between p-4 list-none">
              Quais são os itens proibidos?
              <ArrowDropDownIcon />
            </summary>
            <p className="bg-AccordionDescription text-gray-700 leading-7 p-4">
              Garrafas, latas, bebidas, utensílios de armazenagem, embalagens
              rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e
              armas brancas, objetos pontiagudos, cortantes e/ou perfurantes,
              correntes e cinturões, fogos de artifício, objetos de vidro,
              substâncias inflamáveis, cigarro eletrônico, corrosivas e ou
              tóxicas, revistas, jornais, livros e copo térmico ou similares.
            </p>
          </details>

          <details>
            <summary className="bg-Highlight flex justify-between p-4 list-none">
              Quem tem direito a meia-entrada?
              <ArrowDropDownIcon />
            </summary>
            <p className="bg-AccordionDescription text-gray-700 leading-7 p-4">
              De acordo com a Lei Federal, têm direito ao benefício da
              meia-entrada aqueles que preencherem os requisitos e apresentarem
              os documentos comprobatórios.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </div>
  );
}
