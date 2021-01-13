import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }

  30% {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  text-align: center;
  padding: 0 16px;
  position: relative;
`;

export const Footer = styled.footer`
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 3px;
  }

  p {
    display: inline-flex;
    align-items: center;
  }

  svg {
    margin: 0 3px;
    height: 18px;
    width: 18px;
    color: #ff3432;
    animation: 0.8s ${pulseAnimation} infinite ease-out;
  }
`;
