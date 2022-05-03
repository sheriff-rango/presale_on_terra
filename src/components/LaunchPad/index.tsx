import React from "react";

import Background from "../Background";
import ConnectWalletButton from "../ConnectWalletButton";
import TokenSupply from "../TokenSupply";

import {
  Wrapper,
  Logo,
  Container,
  Title,
  SubTitle,
  Diamond,
  SaleInfoContainer,
  SaleInfoContainerCell,
  CellTitle,
  CellInfo,
  AmountInput,
  AmountInputContainer,
  ButtonContainer,
  TransactionButton,
} from "./styled";

const LaunchPad: React.FC = () => {
  return (
    <Wrapper>
      <Background />
      <Logo />
      <ConnectWalletButton />
      <Container>
        <Title>$SHARD PUBLIC SALE</Title>
        <SubTitle>
          <Diamond size="30px" />0 $Shard Tokens For Sale
        </SubTitle>
        <SaleInfoContainer>
          <SaleInfoContainerCell gridArea="1/1/2/2">
            <CellTitle>Shard Price</CellTitle>
            <CellInfo>0 UST</CellInfo>
          </SaleInfoContainerCell>
          <SaleInfoContainerCell gridArea="1/2/2/3">
            <CellTitle>Total Shard</CellTitle>
            <CellInfo>0</CellInfo>
          </SaleInfoContainerCell>
          <SaleInfoContainerCell gridArea="1/3/2/4">
            <CellTitle>Shard Sold</CellTitle>
            <CellInfo>0</CellInfo>
          </SaleInfoContainerCell>
          <SaleInfoContainerCell gridArea="2/1/3/4">
            <CellTitle>Your Contribution</CellTitle>
            <Diamond style={{ margin: "30px 0" }} />
            <AmountInputContainer>
              <AmountInput placeholder="0" />
            </AmountInputContainer>
            <ButtonContainer>
              <TransactionButton>Enable UST</TransactionButton>
              <TransactionButton disabled>BUY</TransactionButton>
            </ButtonContainer>
          </SaleInfoContainerCell>
        </SaleInfoContainer>
        <TokenSupply />
      </Container>
    </Wrapper>
  );
};

export default LaunchPad;
