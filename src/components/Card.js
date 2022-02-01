/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'components/animation.css';

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

  @media screen and (max-width: 37.5em) {
    border-radius: 5px;
  }
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
  background-color: var(--dark-blue-2);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: flex-end;
  border-bottom: 0.01px solid black;

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

  @media screen and (max-width: 37.5em) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const LowerStaticCard = styled(StaticCard)`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: flex-start;
  border-top: 0.01px solid black;

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

  @media screen and (max-width: 37.5em) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const FrontFlipCard = styled(UpperStaticCard)`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  transform-origin: bottom;
`;

const BackFlipCard = styled(LowerStaticCard)`
  backface-visibility: hidden;
  position: absolute;
  bottom: 0;
  transform-origin: top;
  transform: rotateX(180deg);
`;

const Card = ({ currentNumber, nextNumber, title }) => {
  const [[current, next], setNumber] = useState([currentNumber, nextNumber]);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const toString = num => {
    return ('0' + num.toString(10)).slice(-2);
  };

  const onAnimationEnd = () => {
    setIsAnimated(false);
    setNumber([currentNumber, nextNumber]);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsAnimated(true);
  }, [currentNumber, nextNumber]);

  return (
    <Container>
      <Cards>
        <UpperStaticCard>
          <span>{toString(next)}</span>
        </UpperStaticCard>
        <LowerStaticCard>
          <span>{toString(current)}</span>
        </LowerStaticCard>
        <FrontFlipCard className={isAnimated ? 'fold' : ''} onAnimationEnd={onAnimationEnd}>
          <span>{toString(current)}</span>
        </FrontFlipCard>
        <BackFlipCard className={isAnimated ? 'unfold' : ''}>
          <span>{toString(next)}</span>
        </BackFlipCard>
      </Cards>

      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
