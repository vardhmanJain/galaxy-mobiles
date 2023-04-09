import './styles/App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Body from './body/Body.js';
import { useEffect, useState } from 'react';




function App() {

  const [persistentData, setPersistentData] = useState([]);

  const [loading, setLoading] = useState(true);
  const fetchRepos = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbx7sUXkF-3Paj2UrSammsa7euMzerTm-xllBhXlYZiZqDPKIcM4gqMH68efBXn1pdpXSA/exec?action=getUsers`
    );
    const data = await response.json();
    setPersistentData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? <h3>loading ...</h3> : <Body persistentData={persistentData}/>}
      <Footer />
    </div>
  );
}

export default App;
