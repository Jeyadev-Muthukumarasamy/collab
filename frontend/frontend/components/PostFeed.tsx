import React, { useEffect, useState } from 'react';

const PostFeed: React.FC = () => {
    const [posts, setPosts] = useState<{ id: number; content: string; author: string }[]>([]);

    useEffect(() => {
        // Fetch posts from backend (mocked for now)
        const fetchPosts = async () => {
            const mockPosts = [
                { id: 1, content: 'Excited to work on a new project!', author: 'John Doe' },
                { id: 2, content: 'Anyone up for a hackathon this weekend?', author: 'Jane Smith' },
            ];
            setPosts(mockPosts);
        };
        fetchPosts();
    }, []);

    return (
        <div className="post-feed">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h3>{post.author}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;
