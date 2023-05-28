import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import inputData from './inputData';


//Страница разбивается на три компонента - Header, Main, Footer
//В inputData хранятся исходные данные


function App() {
  return (
    <>
      <Header data={inputData.header}/>
      <Main data={inputData.main}/>
      <Footer data={inputData.footer}/>
    </>
  );
}

export default App;
