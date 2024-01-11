import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <>
   <h1>Ma jolie APP !!!</h1>
   <SecondComponent prenom="Toto" nom="Dupond"/>
   <SecondComponent prenom="Titi" nom="Dupont"/>
   <SecondComponent prenom="Tata" nom="Dupon"/>
   <FirstComponent />
   <FirstComponent />
   <FirstComponent />
   <FirstComponent />
   </>
  );
}

export default App;
