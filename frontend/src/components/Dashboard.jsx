import { getUsers } from "../services/Api";
import { useState, useEffect } from "react";
import UserList from "./UserList";

export default function Dashboard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        });
    }, []);


    return (
        <div className="container mt-5">
            <h1 className="mb-4">Social Media Analytics Dashboard</h1>
            <UserList users={users} />
        </div>
    )
}