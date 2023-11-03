import React, { useState } from "react";
import '../style/AddTask.css';

function AddTask({showModal, closeModal}){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    
    const date = new Date();
    const [dateCreated, setDateCreated] = useState(date.getDate());

    function handleSubmit(e){
        e.preventDefault();
       
    }
    return (
        <div className="container">
            <div className={`modal fade ${showModal ? 'show ' : ''}`} tabIndex="-1" role="dialog" style={showModal ? { display: 'block' } : {}}>
                <div className="modal-backdrop m-backdrop">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"> Add A New Task </h5>
                            </div>
                            <div className="modal-body">
                                <form className="container"onSubmit={handleSubmit} >
                                    <div className="m-2 form-group row">
                                        <label for="title" class=" col-sm-2 col-form-label" >Title: </label>
                                        <div class="col-sm-10">
                                            <input type="text" className=" form-control" value={title} onChange={(e)=> setTitle(e.target.value)} required></input>
                                        </div> 
                                    </div>
                                    <div className="m-2 form-group row">
                                        <label for="description" class=" col-sm-2 col-form-label" > Description: </label>
                                        <div class=" col-sm-10"> 
                                            <textarea class=" form-control " rows="2" value={description} onChange={(e)=> setDescription(e.target.value)} required></textarea>
                                        </div>
                                    </div>
                                    <div className="m-2 form-group row" >
                                        <label for= "status" class=" col-sm-2 col-form-label"> Status: </label>
                                        <div class="col-sm-10">
                                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                                <option value="Pending">Pending</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-primary">Save Task</button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}> Close </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;