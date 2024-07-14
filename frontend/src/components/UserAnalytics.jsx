import React, { useState, useEffect } from 'react';
import { userById, getAccounts } from '../services/Api';
import SocialMediaStats from './SocialMediaStats';
import Analytics from './Analytics';
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

const UserAnalytics = () => {
    const [user, setUser] = useState({});
    const [accounts, setAccounts] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        userById(userId).then(response => {
            setUser(response.data);
        });

        getAccounts(userId).then(response => {
            setAccounts(response.data);
        });
    }, [userId]);

    return (
        <div className="container mt-5">
            <UserDetails user={user} />
            <div className="row mb-5">
                {accounts.map(account => (
                    <div key={account.id} className="col-md-12">
                        <SocialMediaStats account={account} />
                        <Analytics analyticsId={account.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserAnalytics;
