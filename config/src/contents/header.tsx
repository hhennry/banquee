import React from "react";
import { MenuGiv } from "./menu";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="header">
      <a title="Banquee" href="/" className="_logo">
        <picture>
          <source
            width="139"
            height="32"
            type="image/png"
            srcSet="./config/assets/logotipo.png"
          />
          <img
            width="139"
            height="32"
            src="./config/assets/logotipo.svg"
            alt="Logo da Banquee Inc."
          />
        </picture>
      </a>
      <nav className="_navbar">
        <a className="btn" title="Utilidades" href="/#home">
          Utilidades
        </a>
        <Menu>
          <MenuButton as={Button} title="Cartões" className="btn">Cartões <CaretDown /></MenuButton>
          <MenuList className="_quock">
            <MenuItem as="a" href="/card/basic/">
              <h4>Básico</h4>
              <p>O cartão básico da conta é totalmente gratuito e com benefícios financeiros maravilhosos.</p>
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
            </MenuItem>
            <MenuItem as="a" href="/card/premium/">
              <h4>Premium</h4>
              <p>O cartão premium é perfeito para um controle financeiro para aumentar e controlar sua renda.</p>
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
            </MenuItem>
            <MenuItem as="a" href="/card/gold/">
              <h4>Gold</h4>
              <p>O cartão gold entrega o controle total na sua vida financeira sem burocracia direto na sua mão com a melhor equipe.</p>
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
            </MenuItem>
          </MenuList>
        </Menu>
        <a className="btn" title="Suporte ao cliente" href="/support/">
          Suporte
        </a>
        <Menu>
          <MenuButton as={Button} title="Blog" className="btn">Blog <CaretDown /></MenuButton>
          <MenuList className="_blocks">
            <section className="_navs">
              <MenuItem as="h4">Categorias</MenuItem>
              <div>
                <MenuItem as="a" href="/blog/">Controle financeiro</MenuItem>
                <MenuItem as="a" href="/blog/">Conta digital</MenuItem>
                <MenuItem as="a" href="/blog/">Viver é Banquee</MenuItem>
                <MenuItem as="a" href="/blog/">Empreendedorismo</MenuItem>
                <MenuItem as="a" href="/blog/">Ver tudo!</MenuItem>
              </div>
            </section>
            <section className="_arts">
              <MenuItem as="h4">Artigos populares</MenuItem>
              <div>
                <MenuItem as="a" href="/blog/2023/nalckm1Ebtd7">
                  <img width="105" height="105" src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Foto Mulher em pé e segurando smartphones" loading="lazy" />
                  <span>
                    <h5>Como começar a usar o Banquee para sua startup</h5>
                    <p>Uma plataforma financeira intuitiva que oferece controle de despesas, receitas, fluxo de caixa e relatórios, facilitando a gestão financeira.</p>
                  </span>
                </MenuItem>
                <MenuItem as="a" href="/blog/2023/lLwTzc8vXEVF">
                  <img width="105" height="105" src="https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Foto Mulher na camiseta branca do pescoço da tripulação segurando o smartphone" loading="lazy" />
                  <span>
                    <h5>10 coisas que ninguém lhe disse sobre o Banquee</h5>
                    <p>Descubra fatos surpreendentes sobre o Banquee: uma plataforma descentralizada baseada em blockchain e promovendo a inclusão financeira. #InclusãoFinanceira</p>
                  </span>
                </MenuItem>
                <MenuItem as="a" href="/blog/2023/ZqqfMCTZpcKL">
                  <img width="105" height="105" src="https://images.unsplash.com/photo-1624454003060-fc7189ed6242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Foto Bolsa de mão de couro marrom na mesa rosa" loading="lazy" />
                  <span>
                    <h5>7 maneiras de melhorar seus hábitos de poupança</h5>
                    <p>Descubra sete dicas eficazes para aprimorar seus hábitos de poupança e alcançar uma vida financeira mais saudável.</p>
                  </span>
                </MenuItem>
                <MenuItem as="a" href="/blog/2023/qwlcdvArBe4h">
                  <img width="105" height="105" src="https://images.unsplash.com/photo-1611680580888-d0581ee3a3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Foto Homem na camisa social preta vestindo fones de ouvido" loading="lazy" />
                  <span>
                    <h5>Por que amamos Banquee (e você também deveria!)</h5>
                    <p>Descubra por que o Banquee conquista corações: uma plataforma financeira descentralizada, inclusiva e transparente. A revolução financeira está aqui!</p>
                  </span>
                </MenuItem>
              </div>
            </section>
          </MenuList>
        </Menu>
      </nav>
      <nav className="_user">
        <a
          className="_link"
          title="Entrar na minha conta!"
          href="/my/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar
        </a>
        <a
          className="_btn"
          title="Participar da Banquee!"
          href="/my/new/user"
          target="_blank"
          rel="noopener noreferrer"
        >
          Participar!
        </a>
      </nav>
      <MenuGiv />
    </header>
  );
}
