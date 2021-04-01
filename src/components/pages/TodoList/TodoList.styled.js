import styled from 'styled-components';

const SCTodoList = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .close-session {
    position: absolute;
    cursor: pointer;
    top: 24px;
    right: 24px;
  }

  .todo-wrapper {
    max-height: 308px;
    max-width: 420px;
    margin: 40px auto;
    overflow-y: scroll;
  }
`;

export default SCTodoList;