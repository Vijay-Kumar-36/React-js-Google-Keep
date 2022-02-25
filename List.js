import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

function List({title,content,id,ondel}) {
return(
    <div  >
    <div className='List'>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={()=>ondel(id)}>
            <DeleteIcon  />
        </button>
        </div>
        </div>
)
}
export default List;