import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [resData, setResData] = useState(null);
  const handleSubmit = async () => {
    try {
      const res = await axios.get('/.netlify/functions/contact-lookup/?phone=16268624782');
      setResData(JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
      <h2>{resData}</h2>
        <button onClick={handleSubmit}>Start Call</button>
      </header>
    </div>
  );
}

export default App;
