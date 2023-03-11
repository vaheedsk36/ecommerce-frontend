// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyLayout from "./components/layouts/BodyLayout";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Login from "./pages/Login/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App
