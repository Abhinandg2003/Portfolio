import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>

        <Toaster
  position="top-center"
  toastOptions={{
    style: {
      borderRadius: "3px",
      padding: "12px 16px",
      background: "white",
      color: "black",
      border: "1px solid black",
    },
  }}

/>


      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
