import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import stars from 'images/bg-stars.svg';
import hills from 'images/pattern-hills.svg';

import Card from 'components/Card';

const GlobalStyle = createGlobalStyle`
:root {
  --blue: hsl(237, 18%, 59%);
  --red: hsl(345, 95%, 68%);
  --white: hsl(0, 0%, 100%);
  --dark-blue-1: hsl(236, 21%, 26%);
  --dark-blue-2: hsl(235, 16%, 14%);
  --dark-blue-3: hsl(234, 17%, 12%);
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 87.5%;
  font-family: 'Red Hat Text', sans-serif;
  box-sizing: border-box;
}

body {
  background-color: var(--dark-blue-2);
  background-image: url(${stars}), url(${hills});
  background-size: contain;
  background-position: center, bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
}
`;

const Main = styled.main`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1.6rem;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main>
        <Heading>we're launching soon</Heading>
        <Card currentNumber={10} nextNumber={11} />
      </Main>
    </React.Fragment>
  );
};

export default App;
