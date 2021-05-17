import React from 'react';
import Deleteicon from '@material-ui/icons/DeleteTwoTone';
const ListElements=(props)=>{
    return(
        <>
        <div className="w-100  my-2 d-flex">
        <button className="btn border-none" onClick={()=>props.onSelect(props.id)}><Deleteicon/></button> 
         <li className="w-100 text-center text-capitalize">{props.value}</li>
        </div>
        </>
    );
}
export default ListElements;