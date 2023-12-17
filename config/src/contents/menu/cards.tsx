import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";

import "../../../public/styles/menu.css"

export function Cards() {
  return (
    <Popover>
      <PopoverTrigger>
        <button title="Cartões" className="_btn">
          Cartões <CaretDown />
        </button>
      </PopoverTrigger>
      <PopoverContent className="_cards">
        <a title="Conheça o cartão basic" href="/card/basic/">
          <h4>Básico</h4>
          <p>
            O cartão básico da conta é totalmente gratuito e com benefícios
            financeiros maravilhosos.
          </p>
          <picture>
            <source
              width="291"
              height="174"
              type="image/png"
              srcSet="./config/public/img/png/card-basic.png"
            />
            <img
              width="291"
              height="174"
              src="./config/public/img/svg/card-basic.svg"
              alt="Cartão básico da conta."
              loading="lazy"
            />
          </picture>
        </a>
        <a title="Conheça o cartão premium" href="/card/premium/">
          <h4>Premium</h4>
          <p>
            O cartão premium é perfeito para um controle financeiro para
            aumentar e controlar sua renda.
          </p>
          <picture>
            <source
              width="291"
              height="174"
              type="image/png"
              srcSet="./config/public/img/png/card-premium.png"
            />
            <img
              width="291"
              height="174"
              src="./config/public/img/svg/card-premium.svg"
              alt="Cartão premium da conta."
              loading="lazy"
            />
          </picture>
        </a>
        <a title="Conheça o cartão gold" href="/card/gold/">
          <h4>Gold</h4>
          <p>
            O cartão gold entrega o controle total na sua vida financeira sem
            burocracia direto na sua mão com a melhor equipe.
          </p>
          <picture>
            <source
              width="291"
              height="174"
              type="image/png"
              srcSet="./config/public/img/png/card-gold.png"
            />
            <img
              width="291"
              height="174"
              src="./config/public/img/svg/card-gold.svg"
              alt="Cartão gold da conta."
              loading="lazy"
            />
          </picture>
        </a>
      </PopoverContent>
    </Popover>
  );
}
