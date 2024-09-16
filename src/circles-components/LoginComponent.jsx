import React, { useEffect, useState } from "react";
import {
  DynamicWidget,
  DynamicUserProfile,
  useDynamicContext,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";
import { getWeb3Provider, getSigner } from "@dynamic-labs/ethers-v6";
import CreateProfile from "./CreateProfile";
import CirclesSDK from "./CirclesSDK";


const LoginComponent = () => {
  const isLoggedIn = useIsLoggedIn();
  const { primaryWallet } = useDynamicContext();
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  // Function to get the wallet address safely
  const getAddress = () => {
    return primaryWallet?.address || "No wallet connected";
  };

  // Function to fetch provider and signer
  const fetchProviderAndSigner = async () => {
    try {
      const web3Provider = await getWeb3Provider(primaryWallet);
      const web3Signer = await getSigner(primaryWallet);

      setProvider(web3Provider);
      console.log(web3Provider)
      setSigner(web3Signer);
      console.log(web3Signer)
      console.log("Wallet Address: ", getAddress());
    } catch (error) {
      console.error("Error fetching provider and signer:", error);
    }
  };

  // useEffect to fetch provider and signer when logged in
  useEffect(() => {
    if (isLoggedIn && primaryWallet) {
      fetchProviderAndSigner();
    } else {
      console.log("No wallet connected or user not logged in.");
      setProvider(null);
      setSigner(null);
    }
  }, [isLoggedIn, primaryWallet]);

  return (
    <div>
      <div className="flex items-start justify-end space-x-3 self-start absolute top-0 right-0 p-4">
        <DynamicWidget />
        <DynamicUserProfile />
      </div>
      <div className="flex flex-col items-center space-y-3">
        {isLoggedIn && provider && signer && (
          <CreateProfile provider={provider} signer={signer} />
        )}
      </div>
      <CirclesSDK provider={provider} signer={signer} />
    </div>
  );
};

export default LoginComponent;
