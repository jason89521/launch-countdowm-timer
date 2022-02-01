import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 14rem;
`;

const Title = styled.h2`
  color: var(--blue);
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Cards = styled.div`
  position: relative;
  perspective: 300px;
  height: 12rem;
  width: 100%;
  box-shadow: 0px 5px black;
  border-radius: 15px;
`;

const circleSize = 1;

const StaticCard = styled.div`
  background-color: var(--dark-blue-1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: ${circleSize}rem;
    width: ${circleSize}rem;
    border-radius: 50%;
    background-color: black;
  }

  span {
    font-size: 8rem;
    color: var(--red);
  }
`;

const UpperStaticCard = styled(StaticCard)`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: flex-end;
  border-bottom: 0.1px solid black;

  &::before {
    bottom: -${circleSize / 2}rem;
    left: -${circleSize / 2}rem;
  }

  &::after {
    bottom: -${circleSize / 2}rem;
    right: -${circleSize / 2}rem;
  }

  span {
    transform: translateY(50%);
    filter: brightness(0.85);
  }
`;

const LowerStaticCard = styled(StaticCard)`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: flex-start;
  /* border-top: 0.1px solid var(--dark-blue-2); */

  &::before {
    top: -${circleSize / 2}rem;
    left: -${circleSize / 2}rem;
  }

  &::after {
    top: -${circleSize / 2}rem;
    right: -${circleSize / 2}rem;
  }

  span {
    transform: translateY(-50%);
  }
`;

const fold = keyframes`
  from {
    transform: rotateX(0);
  }

  to {
    transform: rotateX(-180deg);
  }
`;

const unfold = keyframes`
  from {
    transform: rotateX(180deg);
  }

  to {
    transform: rotateX(0deg);
  }
`;

const FrontFlipCard = styled(UpperStaticCard)`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  transform-origin: bottom;
  animation: ${fold} 0.6s linear infinite;
`;

const BackFlipCard = styled(LowerStaticCard)`
  backface-visibility: hidden;
  position: absolute;
  bottom: 0;
  transform-origin: top;
  transform: rotateX(180deg);
  animation: ${unfold} 0.6s linear infinite;
`;

const Card = ({ currentNumber, nextNumber }) => {
  return (
    <Container>
      <Cards>
        <UpperStaticCard>
          <span>{nextNumber}</span>
        </UpperStaticCard>
        <LowerStaticCard>
          <span>{currentNumber}</span>
        </LowerStaticCard>
        <FrontFlipCard>
          <span>{currentNumber}</span>
        </FrontFlipCard>
        <BackFlipCard>
          <span>{nextNumber}</span>
        </BackFlipCard>
      </Cards>

      <Title>seconds</Title>
    </Container>
  );
};

export default Card;
