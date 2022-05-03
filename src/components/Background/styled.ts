import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #01203a 0%, #01203a 20%, #063862 100%);
  z-index: -1;
  & > svg {
    position: absolute;
    top: 200px;
  }
`;
