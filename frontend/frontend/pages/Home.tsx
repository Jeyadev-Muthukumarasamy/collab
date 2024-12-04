import React from 'react';
import PostFeed from '../components/PostFeed';
import Notifications from '../components/Notifications';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Social Media App</h1>
            <section>
                <Notifications />
            </section>
            <section>
                <PostFeed />
            </section>
        </div>
    );
};

export default Home;
