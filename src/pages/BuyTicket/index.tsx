import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FormEvent, useState } from "react";
import { parseISO, differenceInYears } from "date-fns";

import BannerGetYourTicket from "../../assets/BannerGetYourTicket.png";

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export function BuyTicket() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTypeTicket, setSelectedTypeTicket] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function buttonHandleClick(e: FormEvent) {
    e.preventDefault();

    const birthdateDate = parseISO(selectedDate);
    const age = differenceInYears(new Date(), birthdateDate);

    const data = {
      name,
      selectedTypeTicket,
    };

    if (!name) {
      alert("Erro: Por favor digite seu nome");
    } else if (name.length <= 12) {
      alert("Erro: Insira seu nome completo");
    } else if (!email) {
      alert("Erro: Por favor digite seu email");
    } else if (!selectedTypeTicket) {
      alert("Erro: Por favor selecione um tipo de ingresso");
    } else if (!selectedDate) {
      alert("Erro: Por favor selecione uma data de nascimento");
    } else if (age > 16 && name.length > 12) {
      const url = `/ticket?data=${encodeURIComponent(JSON.stringify(data))}`;
      window.location.href = url;
    } else if (age >= 13 && age <= 15) {
      alert(
        "Você poderia ir ao evento acompanhado dos pais ou responsáveis legais."
      );
      const url = `/ticket?data=${encodeURIComponent(JSON.stringify(data))}`;
      window.location.href = url;
    } else {
      alert("Você não podem entrar no evento.");
    }
  }

  return (
    <div>
      <Navbar />
      <img src={BannerGetYourTicket} alt="" className="w-full" />

      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-gray-700 md:text-white text-xl md:text-3xl pb-10">
          Preencha o formulário a seguir:
        </h1>
        <form className="max-w-lg w-3/4">
          <label>
            <h1 className="text-gray-700 md:text-white text-lg pb-2">
              Nome Completo
            </h1>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-black p-2 mb-3"
              required
            />
          </label>

          <label>
            <h1 className="text-gray-700 md:text-white text-lg pb-2">Email</h1>
            <input
              type='email'
              name='email'
              id ='email'
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black p-2 mb-3"
              required
            />
          </label>

          <div className=" flex flex-col md:flex-row md:justify-between gap-2">
            <label>
              <h1 className="text-gray-700 md:text-white text-lg pb-2">
                Tipo de Ingresso
              </h1>
              <select
                id="ticket"
                name="ticket"
                defaultValue={"Default"}
                onChange={(e) => setSelectedTypeTicket(e.target.value)}
                className="w-full text-black p-2 mb-3"
                required
              >
                <option value="Default" disabled>
                  Tipo do Ingresso
                </option>
                <option value="Pista Premium">Pista Premium</option>
                <option value="Pista Comum">Pista Comum</option>
                <option value="Cadeiras térreo">Cadeiras térreo</option>
                <option value="Cadeiras superiores">Cadeiras superiores</option>
                <option value="Rampas">Rampas</option>
              </select>
            </label>
            </div>
            <div>
                <label>
                  <h1 className="text-gray-700 md:text-white text-lg pb-2">
                    Data de nascimento
                  </h1>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                    }}
                    className="w-full text-black p-2"
                    required
                  />
                </label>
              </div>

          <button
            onClick={buttonHandleClick}
            className="bg-Highlight h-14 w-40 mx-auto rounded-lg mt-8 flex items-center justify-evenly hover:brightness-90"
          >
            Avançar! <ArrowForwardIcon />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
