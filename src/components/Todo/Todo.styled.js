import styled from 'styled-components';

const SCTodo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .first-div {
    display: flex;
    align-items: center;
  }
  &:not(:first-child) {
    margin-top: 16px;
  }
  svg {
    display: ${({ priority }) => priority ? 'block' :  'none'};
    cursor: pointer;
  }
  &:hover {
    svg {
      display: block;
    }
  }

  button {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 16px;
    border: ${({ theme }) => `2px solid ${theme.color.black}`};
  }
`;

export default SCTodo;