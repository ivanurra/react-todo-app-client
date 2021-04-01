import styled from 'styled-components';

const SCRoundButton = styled.button`
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  border-radius: 36px;
  padding: 0px;
  border: ${({ theme }) => `4px solid ${theme.color.black}`};
`;

export default SCRoundButton;