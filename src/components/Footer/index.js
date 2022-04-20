import React from "react";
import { FaGithub } from "react-icons/fa";
import { Content } from "../../pages/Login/styles";

import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <a
        alt="Github"
        href="https://github.com/paulo-rodrigo"
        target="_blank"
      >
        <FaGithub size={24} />
             Desenvolvido por - Paulo Rodrigo{" "}
      </a>
    </Container>
  );
}
