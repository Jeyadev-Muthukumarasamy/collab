import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="profile">
            <h1>User Profile</h1>
            {/* User bio and profile picture */}
            <div className="profile-info">
                <img src="/default-profile.png" alt="Profile" className="profile-picture" />
                <p>Bio: This is the user's bio.</p>
            </div>
            {/* User posts */}
            <div className="user-posts">
                <h2>Your Posts</h2>
                <div className="post">
                    <p>This is a sample post.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;