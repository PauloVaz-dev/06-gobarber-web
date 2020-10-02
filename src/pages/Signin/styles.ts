import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import sigInBackgoruindImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${sigInBackgoruindImg}) no-repeat;
  background-size: cover;
`;

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${apperFromLeft} 1s;

  form {
    width: 340px;
    display: flex;
    flex-direction: column;
    margin: 40px;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      font-style: normal;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 18px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
