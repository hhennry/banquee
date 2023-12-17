import { Button, Modal, useDisclosure } from "@chakra-ui/react";
import { List, X } from "@phosphor-icons/react";
import React from "react";
import { UsersAcction } from "../usersacction";

export function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} className="_btn menu open">
        <List />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <section className="_menu mobile">
          <div className="_head">
            <Button onClick={onClose} className="_btn menu close">
              <X />
            </Button>
          </div>
          <nav className="_nav">
            <a className="_btn" title="Utilidades" href="/#home">
              Utilidades
            </a>
            <a className="_btn" title="Cartões e seus benefícios" href="/cards">
              Cartões
            </a>
            <a className="_btn" title="Suporte ao cliente" href="/support/">
              Suporte
            </a>
            <a className="_btn" title="Blog da Banquee." href="/blog/">
              Blog
            </a>
          </nav>
          <UsersAcction />
        </section>
      </Modal>
    </>
  );
}
