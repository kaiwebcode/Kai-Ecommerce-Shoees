"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/react";

function ScrollToTop() {
  const [visible, setvisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setvisible(true) : setvisible(false);
  });

  return (
    <Div color={useColorModeValue("gray.600", "gray.400")}>
      <a
        href="#"
        className={`${visible ? "block" : "none"}`}
        color={useColorModeValue("gray.600", "gray.400")}
      >
        <FaChevronUp color={useColorModeValue("gray.600", "gray.400")} />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: black;
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* border:1px solid white; */}
    transition: 0.4s ease-in-out;
    z-index: 25;
    svg {
      color: gray;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 77vw;
      right: initial;
    }
  }
`;

export default ScrollToTop;
