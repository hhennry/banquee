import { Cards } from "./menu/cards";
import { Blog } from "./menu/blog";
import { MenuMobile } from "./menu/mobile";
import { UsersAcction } from "./usersacction";
import React from "react";

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
        <a className="_btn" title="Utilidades" href="/#home">
          Utilidades
        </a>
        <Cards />
        <a className="_btn" title="Suporte ao cliente" href="/support/">
          Suporte
        </a>
        <Blog />
      </nav>
      <UsersAcction />
      <MenuMobile />
    </header>
  );
}
