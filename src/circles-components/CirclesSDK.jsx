import React, { useState, useEffect, useCallback } from "react";
import { BrowserProviderContractRunner } from "@circles-sdk/adapter-ethers";
import { Sdk } from "@circles-sdk/sdk";

const CirclesSDK = ({ provider, signer }) => {
  const [sdk, setSdk] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [adapter, setAdapter] = useState(null);
  const [circlesProvider, setCirclesProvider] = useState(null);
  const [circlesAddress, setCirclesAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const chainConfig = {
    pathfinderUrl: "https://pathfinder.aboutcircles.com",
    circlesRpcUrl: "https://rpc.helsinki.aboutcircles.com",
    v1HubAddress: "0x29b9a7fbb8995b2423a71cc17cf9810798f6c543",
    v2HubAddress: "0xa5c7ADAE2fd3844f12D52266Cb7926f8649869Da",
    migrationAddress: "0xe1dCE89512bE1AeDf94faAb7115A1Ba6AEff4201",
    nameRegistryAddress: "0x738fFee24770d0DE1f912adf2B48b0194780E9AD",
    profileServiceUrl: "https://chiado-pathfinder.aboutcircles.com/profiles/",
  };

  const initSdk = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (!provider) throw new Error("Provider is required to initialize the SDK.");

      const adapter = new BrowserProviderContractRunner();
      adapter.provider = provider;
      await adapter.init(); // Initialize the adapter before using it
      setAdapter(adapter); // Set the adapter in the state after initialization

      const circlesProvider = adapter.provider;
      setCirclesProvider(circlesProvider);
      console.log(circlesProvider, "==>got circles provider");

      const circlesAddress = await adapter.address;
      setCirclesAddress(circlesAddress);
      console.log(circlesAddress, "===>got circles address");

      const sdk = new Sdk(chainConfig, adapter); // Pass the initialized adapter to the SDK
      setSdk(sdk); // Set the SDK in the state
      setIsConnected(true);
    } catch (error) {
      console.error("Error initializing SDK:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [provider]);

  useEffect(() => {
    if (provider) {
      initSdk();
    }
  }, [provider, initSdk]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Circles SDK Status</h3>
      {isConnected ? (
        <div>
          <p><strong>SDK Initialized:</strong> Yes</p>
          <p><strong>Circles Provider:</strong> {circlesProvider ? 'Available' : 'Not available'}</p>
          <p><strong>Circles Address:</strong> {circlesAddress}</p>
        </div>
      ) : (
        <p>SDK not connected.</p>
      )}
    </div>
  );
};

export default CirclesSDK;
