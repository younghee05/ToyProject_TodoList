import './App.css';
import { Global, css } from '@emotion/react';
import { reset } from './styles/global';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <>
       <Global styles={reset}/>
       <MainPage/>
    </>
  );
}

export default App;
