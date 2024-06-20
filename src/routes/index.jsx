import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Index";
import Info from "../Pages/Info/Index";


const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info/>} />  
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
