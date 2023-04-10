import React, { useState, useEffect } from "react";
import axios from 'axios';

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    const getRoutines = async () => {
        try {
            const response = await axios.get('/api/routines');
            console.log(response.data);
            setRoutines(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRoutines();
    }, [])

    return (
        <div class="container">

            <div>
                <h1>Routines</h1>
            </div>

            {
                routines.map((routine, index) => {
                    return <div key={index}>
                        <div class="card">
                            <div class="card-header">
                                {routine.name}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Author: {routine.creatorName}</li>
                                <li class="list-group-item">Goal: {routine.goal}</li>
                                <div class="card-header"> Activities </div>
                                <li class="list-group-item">{routine.activities.map((activities, index) => {
                                    return <div class="list-group-item">
                                        <div key={index}>Name: {activities.name}</div>
                                        <div>Count: {activities.count}</div>
                                        <div>Duration: {activities.duration}</div>
                                        <div>Description: {activities.description}</div>
                                    </div>

                                })}
                                </li>
                            </ul>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Routines;