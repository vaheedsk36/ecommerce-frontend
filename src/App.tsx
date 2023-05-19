import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import BodyLayout from "./components/layouts/BodyLayout";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Login from "./components/forms/Login";
import CreateAccount from "./components/forms/CreateAccount";
import HomePage from "./pages/HomePage";
import AccountDetails from "./pages/AccountDetails";
const queryClient = new QueryClient();

function App() {
  return (
    //TODO these are temporary routes, have to write it in a proper way
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountDetails/>}>
            <Route path="login" element={<Login/>} />
            <Route path="create-new-account" element={<CreateAccount/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App
