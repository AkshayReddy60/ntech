import React,{useState} from 'react';
import './App.css';
import Adddata from './components/Adddata';
import Viewdata from './components/Viewdata';
import { Tab, Tabs, Container } from "@mui/material";


function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState([]);

  const handleTabChange=(event,newValue)=>{
    setTabIndex(newValue);
  };
  const addEntry = (entry) => {
    setData([...data, entry]);
  };  


  return (
    <>
      <Container>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Add Data" />
        <Tab label="view Data" />
      </Tabs>
      {tabIndex === 0 && <Adddata addEntry={addEntry} />}
      {tabIndex === 1 && <Viewdata data={data} />}
    </Container>
    </>
   
  )
}

export default App;
