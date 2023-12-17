import { CaretRight } from "@phosphor-icons/react";
import React from "react";

export function UsersAcction() {
  return (
    <nav className="_user">
      <a
        className="_btn entrar"
        title="Entrar na minha conta!"
        href="/my/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entrar
        <CaretRight />
      </a>
      <a
        className="_btn participe"
        title="Participar da Banquee!"
        href="/my/new/user"
        target="_blank"
        rel="noopener noreferrer"
      >
        Participar!
      </a>
    </nav>
  );
}
