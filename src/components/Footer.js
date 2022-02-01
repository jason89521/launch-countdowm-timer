import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Facebook } from 'images/icon-facebook.svg';
import { ReactComponent as Pinterest } from 'images/icon-pinterest.svg';
import { ReactComponent as Instagram } from 'images/icon-instagram.svg';

const Container = styled.footer`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;

  svg {
    cursor: pointer;
    fill: var(--blue);

    &:hover {
      fill: var(--red);
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Facebook />
      <Pinterest />
      <Instagram />
    </Container>
  );
};

export default Footer;
