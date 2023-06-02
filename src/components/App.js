import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Placeholder from "./Placeholder";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/placeholder" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
