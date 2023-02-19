// import { useEffect } from "react";
import BodyLayout from "./components/layouts/BodyLayout";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BodyLayout>
          <div style={{
            height:'100rem'
          }}>
            <h1>Work in progress</h1>
          </div>
        </BodyLayout>

        <input type="number" />
        <button type="submit" onClick={()=>{
        }}>Submit</button>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> */}
    </QueryClientProvider>
  );
}

export default App
