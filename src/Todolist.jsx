import React from 'react';
import { useState } from 'react';
import './todolist.css';
import ListElements from './ListElements';
import Addicon from '@material-ui/icons/AddCircleTwoTone';
const Todolist=()=>{
    const [items,setitems]=useState("");
    const [initialitems,finalitems]=useState([]);
  
    const changeevent=(event)=>{
        setitems(event.target.value);
    }

    const deleteevent=(id)=>{
        finalitems((oldarray)=>{
           return oldarray.filter((curele,index)=>{
                return index!==id;
            });
        });
    }
    const storeitems=()=>{
        if(items===""){
            return 
        }
        finalitems((oldarray)=>{
            return [...oldarray,items];
        });
        setitems("");
    }
    return(
        <>
        <div className="container">
        <div className="row h-100 d-flex justify-content-center align-items-center">
            <div className="col-md-10 col-10  h-75 shadow-lg main">
                <h1 className="text-center py-3">To-Do List</h1>
                <form onSubmit={e => {e.preventDefault();}}>
                <div className="input-group mt-3 w-75 mx-auto">
                    <input type="text" placeholder="Add an item" value={items} className="form-control" onChange={changeevent}/>
                    <button type="submit" onClick={storeitems} className="btn"><Addicon/></button>
                </div>
                </form>
                {initialitems.length===0 ?<div class="alert alert-success alert-dismissible mt-3 text-center"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Info!   </strong>List is Empty 😑 </div>:null}
                <ul className="d-flex flex-column align-items-center mt-3 w-75 mx-auto">
                {initialitems.map((curele,index)=>{
                    return <ListElements value={curele} key={index} id={index} onSelect={deleteevent} />
                })}
                </ul>
            </div>
        </div>
        </div>
        </>
    )
}
export default Todolist;