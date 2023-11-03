import React from "react";
import { useEffect, useState } from "react";


function Tasklist({openModal, openEditModal}){
    const [data, setData] = useState([]);

    //fetch tasks
    
    const fetchData = async () => {
        try{
            const response = await fetch("http://127.0.0.1:3000/tasks");
            const jsonResp = await response.json();
            setData(jsonResp);
            console.log(jsonResp)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    };
    
    useEffect(()=> {  
        fetchData();
    }, []);


    function handleDelete(item){
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");

        if (confirmDelete){
            fetch(`http://localhost:3000/tasks/${item.id}`, {
            method: "DELETE",
        })
        .then((resp)=> console.log(resp.json));   
        }
        fetchData();
        
    }



    return (
        <div className="container">
        <div className="table-container mt-4 mx-4 bg-light p-4 h-custom row d-flex">
            <div className="row">
                <div className="col">
                    <h5>Tasks List</h5>
                </div>
            </div>
            <p>
            <br></br>
            </p>
            {/* table with tasks  */}
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Creation Date</th>
                                <th>Mark as done</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                   
                                    <td>{item.title} </td>
                                    <td>{item.description}</td>
                                    <td>{item.status}</td>
                                    <td>{item.creation_date}</td>
                                    <td><input type="checkbox"/></td>
                                    <td>
                                        <i className="px-2 fa fa-edit" aria-hidden="true" onClick={() => openEditModal(item)}></i>
                                        <i className="px-2 fa fa-trash" aria-hidden="true" onClick={() => handleDelete(item)}></i>                                
                                    </td>
                                </tr>     
                            ))}                       
                              
        
                        </tbody>
                    </table>
                </div>
                <div className="col text-right">
                <button className="btn btn-danger " onClick={openModal}>
                    <i className="fa fa-plus">  Add New </i>
                </button>
            </div>
                </div>
        </div>
        

    )
}
export default Tasklist;