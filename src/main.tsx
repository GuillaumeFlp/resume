import { StrictMode } from "react";
import "./index.css";
import AppProviders from "./AppProviders.tsx";
import AppRouter from "./AppRouter.tsx";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </StrictMode>
);
