import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "./views/App";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personagens" element={<App />} />
        <Route path="/" element={<Navigate replace to="/personagens" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesConfig;