import { createRoot } from "react-dom/client";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <MobileMenuProvider>
    <App />
  </MobileMenuProvider>
);
