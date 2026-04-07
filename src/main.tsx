import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import AppLoader from "./shared/components/AppLoader";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLoader>
      <RouterProvider router={router} />
    </AppLoader>
  </StrictMode>
);
