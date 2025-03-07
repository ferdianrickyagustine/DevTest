import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from "./views/AboutPage";
import BaseLayout from "./views/BaseLayout";
import HomePage from "./views/HomePage";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right"/>
    </>
  );
}