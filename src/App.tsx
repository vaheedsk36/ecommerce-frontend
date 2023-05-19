// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyLayout from "./components/layouts/BodyLayout";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AccountFormsPage from "./pages/AccountFormsPage";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account/login" element={<AccountFormsPage/>} />
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App
