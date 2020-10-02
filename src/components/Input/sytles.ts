import styled, { css } from 'styled-components';
import Tootip from '../Tooltip';

interface ContinerPropos {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContinerPropos>`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  svg.inputError {
    margin-left: 16px;
    margin-right: 0;
  }
`;

export const Error = styled(Tootip)`
  height: 20px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
