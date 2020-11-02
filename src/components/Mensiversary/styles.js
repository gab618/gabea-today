import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  0%,100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;

  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${rainbowAnimation} 1s ease-in-out infinite;
  background-size: 400% 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > strong {
    font-size: 36px;
    text-align: center;

    > span {
      white-space: nowrap;
    }
  }


}
`;
