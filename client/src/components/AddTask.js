import React, { useState } from "react";
import '../style/AddTask.css';

function AddTask({ showModal, closeModal }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    function getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }

    const [dateCreated, setDateCreated] = useState(getCurrentDate());
    

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const data = {
            title: title,
            description: description,
            status: status,
            creation_date: dateCreated, // Fixed the dateCreated issue
        };

        fetch("http://localhost:3000/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                // Handle the success case, e.g., close the modal
                alert("Saved successfully")
                console.log(response.json())
            } else {
                console.log("Failed to add a task.");
                console.log(response.json())
            }
        })
        
        closeModal();
    }

    return (
            <div className="container">
                <div className={`modal fade ${showModal ? 'show ' : ''}`} tabIndex="-1" role="dialog" style={showModal ? { display: 'block' } : {}}>
                    <div className="modal-backdrop m-backdrop">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> Add A New Task </h5>
                                </div>
                                <div className="modal-body">
                                    <form className="container">
                                        <div className="m-2 form-group row">
                                            <label for="title" className="col-sm-3 col-form-label">Title: </label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="m-2 form-group row">
                                            <label for="description" className="col-sm-3 col-form-label"> Description: </label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" rows="2" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="m-2 form-group row">
                                            <label for="status" className="col-sm-3 col-form-label"> Status: </label>
                                            <div className="col-sm-9 pt-2">
                                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                                    <option value="Select">select</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save Task</button>
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
