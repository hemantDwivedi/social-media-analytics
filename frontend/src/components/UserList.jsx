import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
    return (
        <div className="row">
            {users.map(user => (
                <div key={user.id} className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text"><i className="bi bi-tags-fill"></i> Category: {user.category}</p>
                            <Link to={`/users/${user.id}`} className="btn my-button">
                                View Analytics
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
