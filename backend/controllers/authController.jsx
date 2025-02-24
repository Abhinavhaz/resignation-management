const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Registration (For Employees Only)
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        user = new User({ username, email, password: hashedPassword, role: 'employee' });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// User Login (Employees & HR)
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Check Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT Token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// HR Account Setup (Static Admin User)
exports.createAdmin = async () => {
    try {
        const existingHR = await User.findOne({ email: 'admin@example.com' });
        if (!existingHR) {
            const hashedPassword = await bcrypt.hash('admin', 10);
            const admin = new User({
                username: 'Admin',
                email: 'admin@example.com',
                password: hashedPassword,
                role: 'hr'
            });

            await admin.save();
            console.log('HR Admin account created');
        }
    } catch (error) {
        console.error('Error creating HR admin:', error);
    }
};
