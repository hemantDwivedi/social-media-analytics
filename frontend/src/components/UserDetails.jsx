import React, { useState, useEffect } from 'react';

function UserDetails({ user }) {
    return (
        <div className="card mb-4 p-3">
        <div className="card-body">
            <h1 className="card-title">{user.name}</h1>
            <p className="card-text"><i className="bi bi-tags-fill"></i> Category: {user.category}</p>
            <p className="card-text"><i className="bi bi-info-circle-fill"></i> Bio: {user.bio}</p>
            <p className="card-text"><i className="bi bi-envelope-fill"></i> Contact: {user.contactOptions}</p>
            <p className="card-text"><i className="bi bi-link-45deg"></i> Links: <a href={user.links}>{user.links}</a></p>
        </div>
    </div>
    );
};

export default UserDetails;
