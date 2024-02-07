import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import FlippableCard from './assets/components/FlippableCard/FlippableCard';
import data from './assets/components/MockApi.json';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [api, setApi] = useState(data);

  return (
    <>
 
      <FlippableCard api={api} />
    </>
  );
}

export default App;
