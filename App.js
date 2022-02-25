
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import {Createarea} from './Createarea'
import {Header} from './Header';
import List from './List' 
function App() {
    const [store, setstore] = useState([]);
     function addnote (newvalue){
setstore((prev)=>
{
    return[...prev,newvalue]
})
     }
     console.log(store);
     const deleteitems = (id)=>{
        setstore((prev)=>{
          return prev.filter((item,index)=>{
            return index!==id;
          })
        })
          }
    return(
        <>
        <Header/>
           <Createarea onadd={addnote} />
           {store.map((item,index)=>{
               return(<List key={index} id={index} title={item.Title} content={item.Content} ondel={deleteitems}/>)
           })}
           <List/>
        </>
    )
}
export default App;