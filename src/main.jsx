import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: "be220ab0-8e5c-492b-a15f-00ac415fd622",
      }}
    >
      <App />
    </DynamicContextProvider>
  </StrictMode>
);