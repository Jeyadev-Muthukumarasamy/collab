import React, { useEffect, useState } from 'react';

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        // Fetch notifications from the backend (mocked for now)
        const fetchNotifications = async () => {
            const mockNotifications = [
                'John liked your post.',
                'Jane commented on your project.',
                'You have a new friend request from Alex.',
            ];
            setNotifications(mockNotifications);
        };
        fetchNotifications();
    }, []);

    return (
        <div className="notifications">
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
