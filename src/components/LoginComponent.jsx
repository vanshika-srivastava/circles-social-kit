import React, { useEffect } from "react";
import {
  DynamicWidget,
  DynamicUserProfile,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

const LoginComponent = () => {
  const isLoggedIn = useIsLoggedIn();
  const { primaryWallet } = useDynamicContext();

  // Function to get the wallet address safely
  const getAddress = () => {
    return primaryWallet?.address || "No wallet connected";
  };

  // Logging the wallet address
  useEffect(() => {
    if (isLoggedIn && primaryWallet) {
      console.log("Wallet Address: ", getAddress());
    } else {
      console.log("No wallet connected or user not logged in.");
    }
  }, [isLoggedIn, primaryWallet]);

  return (
    <div>
      <div>
        <DynamicWidget />
        <DynamicUserProfile />
      </div>
    </div>
  );
};

export default LoginComponent;