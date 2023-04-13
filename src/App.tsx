import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/AllPages";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
