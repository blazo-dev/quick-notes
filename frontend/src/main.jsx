import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./main.css";
import App from "./App.jsx";
import NotesProvider from "./context/NotesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </StrictMode>
);
