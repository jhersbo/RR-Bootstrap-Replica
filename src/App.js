import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from './components/TopBar';
import UpperSection from './components/UpperSection';
import StoreListing from './components/StoreListing';

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <UpperSection></UpperSection>
      <StoreListing></StoreListing>
    </div>
  );
}

export default App;
