import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { List, X } from "@phosphor-icons/react";
import React from "react";

export function MenuGiv() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} className="open">
        <List />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="_menu">
          <ModalHeader className="header">
            <Button onClick={onClose}>
              <X />
            </Button>
          </ModalHeader>
          <ModalBody className="_main">
            <a title="Utilidades" href="/#home">
              Utilidades
            </a>
            <a title="Cartões e seus benefícios" href="/cards">
              Cartões
            </a>
            <a title="Suporte ao cliente" href="/support/">
              Suporte
            </a>
            <a title="Blog da Banquee." href="/blog/">
              Blog
            </a>
          </ModalBody>
          <ModalFooter className="footer">
              <a className="_link"
                title="Entrar na minha conta!"
                href="/my/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar
              </a>
              <a className="_btn"
                title="Participar da Banquee!"
                href="/my/new/user"
                target="_blank"
                rel="noopener noreferrer"
              >
                Participar!
              </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
