import React, { useEffect, useState } from 'react';
import { analyticsById } from '../services/Api';

const Analytics = ({ analyticsId }) => {
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        analyticsById(analyticsId).then(response => {
            setAnalytics(response.data);
        });
    }, [analyticsId]);

    return (
        <div className="d-flex flex-wrap justify-content-around mb-5">
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-bar-chart-line"></i> Account Reached</p>
                    <h2 className="card-number">{analytics.reachedCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-people"></i> Account Engaged</p>
                    <h2 className="card-number">{analytics.engagedCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-journal"></i> Total Stories</p>
                    <h2 className="card-number">{analytics.storiesCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-person-plus"></i> Total Follows</p>
                    <h2 className="card-number">{analytics.followsCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-postcard"></i> Total Posts</p>
                    <h2 className="card-number">{analytics.postsCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-bookmark"></i> Total Saves</p>
                    <h2 className="card-number">{analytics.saveCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-chat-dots"></i> Total Comments</p>
                    <h2 className="card-number">{analytics.commentsCount}</h2>
                </div>
            </div>
            <div className="card mb-3 flex-fill analytics-card">
                <div className="card-body">
                    <p className="card-text"><i className="bi bi-share"></i> Total Shares</p>
                    <h2 className="card-number">{analytics.sharesCount}</h2>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
