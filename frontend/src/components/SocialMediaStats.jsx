import React from 'react';
import { Icon } from '../services/Icon';

const SocialMediaStats = ({ account }) => {
    const platformIcon = Icon(account.platform);

    return (

        <div className="mb-4">
            <h5 className="card-title mb-2"> <i className={`bi ${platformIcon}`}></i> {account.platform}</h5>
            <div className="d-flex flex-wrap gap-2 w-100">
                <div className="card mb-3 social-media-card">
                    <div className="card-body">
                        <p className="card-text"><i className="bi bi-person-fill"></i> Followers</p>
                        <h2 className="card-number">{account.followersCount}</h2>
                    </div>
                </div>
                <div className="card mb-3 social-media-card">
                    <div className="card-body">
                        <p className="card-text"><i className="bi bi-person-check-fill"></i> Following</p>
                        <h2 className="card-number">{account.followingCount}</h2>
                    </div>
                </div>
                <div className="card mb-3 social-media-card">
                    <div className="card-body">
                        <p className="card-text"><i className="bi bi-card-text"></i> Posts</p>
                        <h2 className="card-number">{account.postsCount}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaStats;
