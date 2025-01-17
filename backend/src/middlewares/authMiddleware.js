const jwt = require('jsonwebtoken');
const User = require('@/models/userModel');

exports.authenticateToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id);
        if (!req.user) return res.status(404).json({ message: 'User not found' });

        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token', error });
    }
};

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
  };
  