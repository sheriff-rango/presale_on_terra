import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: calc(100vw - 5px); // 5px is the width of scroll bar
  min-height: 100vh;
  z-index: 2;
  color: white;
`;

export const Logo = styled.div`
  background: url("images/logo/GlassWhiteTransparent.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 180px;
  height: 116px;
  position: absolute;
  left: 100px;
  top: 50px;
`;

export const Container = styled.div`
  padding: 200px 500px 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
`;

export const SubTitle = styled.div`
  align-items: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

export const Diamond = styled.div<{ size?: string }>`
  --size: ${({ size }) => size ?? "50px"};
  background: url("images/others/diamond.png");
  background-size: cover;
  width: var(--size);
  height: var(--size);
  margin: 0 10px;
`;

export const SaleInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 50px;
`;

export const SaleInfoContainerCell = styled.div<{ gridArea: string }>`
  align-items: center;
  justify-content: center;
  border: 2px solid #efec9a;
  border-radius: 12px;
  background-color: rgba(35, 26, 46, 0.7);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const CellTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const CellInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
`;

export const AmountInputContainer = styled.div`
  position: relative;
  width: 70%;
  align-items: center;
  display: flex;
  &::after {
    position: absolute;
    content: "UST";
    font-size: 14px;
    font-weight: 600;
    right: 16px;
  }
`;

export const AmountInput = styled.input`
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 32px;
  background-color: transparent;
  padding: 12px 64px 12px 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 12px;
  position: relative;
  width: 70%;
  align-items: center;
`;

export const TransactionButton = styled.div<{ disabled?: boolean }>`
  flex: 1 1;
  margin: 0 1rem;
  padding: 16px 0;
  border: none;
  margin-top: 24px;
  border-radius: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: ${({ disabled }) => !disabled && 0.8};
  }
  ${({ disabled }) =>
    disabled
      ? `
    background-color: rgba(35, 26, 46, 0.9);
    border: 2px solid #efec9a;
  `
      : `background-image: linear-gradient(
    to Top,
    #dabd70,
    #ceab63,
    #bc8f50,
    #c09555,
    #e9c474
  );`}
`;
