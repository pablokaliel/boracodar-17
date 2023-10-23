import Image from "next/image";

import bgcard2 from "../../public/bg-card2.png";
import finn from "../../public/finn.svg";

import bgcard from "../../public/bg-card.png";
import bb8 from "../../public/BB-8.svg";

import bgcharacter from "../../public/Character.png";
import bg from "../../public/Image.png";

import Atropos from "atropos/react";

export default function Home() {
  return (
    <Atropos
      shadow={false}
      highlight={false}
      className="flex justify-center items-center w-full h-full">
        <div className="h-[600px] flex items-center">

          <div className="w-80 h-[486px] bg-purple-gradient-bg relative rounded-2xl bg-gradient-to-r from-purple-gradient-card to-pink-gradient-card
          shadow-3xl overflow-hidden flex items-center justify-center">
            <Image src={bgcard} alt="fundo do card" className="absolute opacity-30" />
            <Image src={finn} alt="imagem do finn" />
          </div>

          <div
            className="w-[436px] px-10 pt-12 z-10 h-[608px] bg-purple-gradient-bg relative rounded-2xl bg-gradient-to-r from-purple-gradient-card
            to-pink-gradient-card shadow-4xl overflow-hidden">
            <div className="z-50">
              <div className="w-60">
                <h1 data-atropos-offset="5" className="uppercase text-3xl text-white drop-shadow-sm backdrop-blur-md">
                  Rey SkyWalker
                </h1>
                <p data-atropos-offset="1" className="text-[12px] mt-4">
                  Era uma catadora de sucata que descobriu ser sensível à Força
                  durante sua busca ao lendário Mestre Jedi Luke Skywalker.
                </p>
              </div>
              <div className="mt-14 w-[200px] flex flex-col gap-4">
                <Image
                  data-atropos-offset="5"
                  src={bgcharacter}
                  className="absolute bottom-0 right-0 z-10"
                  alt="imagem da Rey SkyWalker"/>
                <Image
                  src={bg}
                  className="absolute top-0 right-0 opacity-10"
                  alt="fundo do card"/>
                <div>
                  <h3 data-atropos-offset="1" className="text-xs text-color-h3">Filmes</h3>
                  <p data-atropos-offset="2" className="text-xs font-bold">The Force Awakens, The Last Jedi, The Rise of Skywalker &Forces of Destiny</p>
                </div>
                <div>
                  <h3 data-atropos-offset="1" className="text-xs text-color-h3">Especie</h3>
                  <p data-atropos-offset="2" className="text-xs font-bold">Humana</p>
                </div>
                <div>
                  <h3 data-atropos-offset="1" className="text-xs text-color-h3">Altura</h3>
                  <p data-atropos-offset="2" className="text-xs font-bold">1,7m</p>
                </div>
                <div>
                  <h3 data-atropos-offset="1" className="text-xs text-color-h3">Localidade</h3>
                  <p data-atropos-offset="2" className="text-xs font-bold">Jakku</p>
                </div>
                <div>
                  <h3 data-atropos-offset="1" className="text-xs text-color-h3">Armas</h3>
                  <p data-atropos-offset="2" className="text-xs font-bold">Sabre de luz, Blaster, Quarterstaff</p>
                </div>
              </div>
            </div>
          </div>

        <div className="w-80 h-[486px] bg-purple-gradient-bg relative rounded-2xl bg-gradient-to-r from-purple-gradient-card to-pink-gradient-card
        shadow-3xl overflow-hidden flex items-center justify-center">
          <Image src={bgcard2} alt="fundo do card" className="absolute opacity-30" />
          <Image src={bb8} alt="imagem do bb8" />
        </div>
      </div>
    </Atropos>
  );
}
