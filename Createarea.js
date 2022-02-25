import React from 'react';
import { Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import './App.css';
export const Createarea = (props) => {
    const [Expand, setExpand] = useState(false);
    const [Note, setNote] = useState({
        Title:"",
        Content:""
    });
    const expand = () =>{
        setExpand(true);
    };
    const handlechange = (e)=>{
        const {name,value}=e.target;
        setNote((prev)=>{
            return{
                ...prev,[name]:value
            };
        });
    };
    // const submit = (e) =>{
    //     e.preventDefault();
    //     addnote(Note);
    //     setNote({Title:'',Content:''});
    // };
    
  return <div>
      <form>
       <input type='text'  name='Title' placeholder='Title'  onChange={handlechange} value={Note.Title} onClick={expand}/> 
       {Expand &&   <textarea placeholder='Content' name='Content' rows={Expand ? 3 : 1} onChange={handlechange}  value={Note.Content}/>}
          {/* <Zoom in={true} > */}
          <Fab color="primary" onClick={(e)=>{
              e.preventDefault();
              props.onadd(Note);
              setNote({
                  Title:'',Content:''
              });
          }} >
        <AddIcon />
      </Fab>
      {/* </Zoom> */}
      </form>
  </div>;
};
