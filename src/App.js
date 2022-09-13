import './App.css';
import MainRoutes from './components/MainRoutes';
import { ContextProvider } from './pages/landing/Context/ContextProvider';


function App() {
  return (
    <>
       <ContextProvider>
    <MainRoutes/>
    </ContextProvider>
      
    </>
  );
}

export default App;