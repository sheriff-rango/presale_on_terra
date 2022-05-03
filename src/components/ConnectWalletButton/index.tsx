import React, { useEffect } from "react";
import { useWallet } from "@terra-money/wallet-provider";

import { setAccount } from "../../library/accountSlice";

import { useAppDispatch, useAppSelector } from "../../library/hooks";
import { ConnectButton } from "./styled";

const ConnectWalletButton: React.FC = () => {
  const {
    connect,
    availableConnectTypes,
    availableInstallTypes,
    install,
    disconnect,
    wallets,
  } = useWallet();
  const dispatch = useAppDispatch();
  const account = useAppSelector((state) => state.account.address);
  const handleConnectWallet = () => {
    for (let i = 0; i < availableConnectTypes.length; i++) {
      const connectionType = availableConnectTypes[i];
      if (connectionType === "EXTENSION") {
        connect(connectionType);
        return;
      }
    }
    for (let i = 0; i < availableInstallTypes.length; i++) {
      const installType = availableInstallTypes[i];
      if (installType === "EXTENSION") {
        install(installType);
      }
    }
  };

  const handleDisconnectWallet = () => {
    disconnect();
  };

  useEffect(() => {
    const walletInfo = wallets[0] || {};
    dispatch(setAccount(walletInfo.terraAddress || ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallets]);

  return (
    <ConnectButton
      connected={!!account}
      onClick={account ? handleDisconnectWallet : handleConnectWallet}
    >
      {account || "Connect Wallet"}
    </ConnectButton>
  );
};

export default ConnectWalletButton;
