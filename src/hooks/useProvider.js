// import { useState, useEffect } from "react";
// import { getWeb3Provider, getSigner } from "@dynamic-labs/ethers-v6";
// import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

// const useWeb3Provider = () => {
//   const isLoggedIn = useIsLoggedIn();
//   const { primaryWallet } = useDynamicContext();
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);

//   useEffect(() => {
//     const fetchProviderAndSigner = async () => {
//       if (isLoggedIn && primaryWallet) {
//         try {
//           const web3Provider = await getWeb3Provider(primaryWallet);
//           const web3Signer = await getSigner(primaryWallet);
//           setProvider(web3Provider);
//           setSigner(web3Signer);
//         } catch (error) {
//           console.error("Error fetching provider and signer:", error);
//         }
//       } else {
//         setProvider(null);
//         setSigner(null);
//       }
//     };

//     fetchProviderAndSigner();
//   }, [isLoggedIn, primaryWallet]);

//   return { provider, signer, isLoggedIn, primaryWallet };
// };

// export default useWeb3Provider;
