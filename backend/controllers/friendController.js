const User = require('../models/User');

// Send friend request
exports.sendRequest = async (req, res) => {
    const { senderId, receiverId } = req.body;
    try {
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!receiver) return res.status(404).json({ message: 'User not found' });

        receiver.friendRequests.push(senderId);
        await receiver.save();

        res.json({ message: 'Friend request sent' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Accept friend request
exports.acceptRequest = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        const sender = await User.findById(id);

        if (!user || !sender) return res.status(404).json({ message: 'User not found' });

        user.friends.push(id);
        user.friendRequests = user.friendRequests.filter((requestId) => requestId !== id);
        sender.friends.push(userId);

        await user.save();
        await sender.save();

        res.json({ message: 'Friend request accepted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get friends list
exports.getFriends = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).populate('friends', 'name profilePicture');
        res.json(user.friends);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};