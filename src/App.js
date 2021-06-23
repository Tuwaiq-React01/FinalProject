import './App.css';
import AddToListComponent from './Components/AddToListComponent.jsx';
import GetListComponent from './Components/GetListComponent';
import Print from './Components/PrintComponent';
import ThirdPartyComponent from './Components/ThirdPartyComponent'
function App() {
  return (
    <>
      <Print/>
      <ThirdPartyComponent />
     
     <AddToListComponent />
      <GetListComponent />
       
    </>
  );
}

export default App;
