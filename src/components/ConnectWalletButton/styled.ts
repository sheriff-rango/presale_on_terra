import styled from "styled-components";

export const ConnectButton = styled.div<{ connected?: boolean }>`
  position: absolute;
  right: 50px;
  top: 50px;
  width: max-content;
  border: none;
  padding: 0.5rem 2rem !important;
  border-radius: 0.5rem !important;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  text-align: center;
  border: 2px solid #ffffff;
  transition: all 0.5s;
  ${({ connected }) =>
    connected
      ? `
    background-color: rgba(35, 26, 46, 0.9);
  `
      : `
    background-image: linear-gradient(
    to Top,
    #dabd70,
    #ceab63,
    #bc8f50,
    #c09555,
    #e9c474
  );`}
  &:hover {
    opacity: 0.8;
  }
`;
