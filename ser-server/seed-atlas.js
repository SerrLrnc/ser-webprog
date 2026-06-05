const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Define User Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    gender: String,
    contactNumber: String,
    email: String,
    username: String,
    password: String,
    address: String,
    type: String,
    isActive: Boolean
});

const User = mongoose.model('User', userSchema);

// Users data - 2 Admins, 3 Editors, 5 Viewers (including Cyrus Robles)
const users = [
    // ========== ADMINS (2) ==========
    {
        firstName: "James",
        lastName: "Wilson",
        age: "34",
        gender: "male",
        contactNumber: "09171234567",
        email: "james.wilson@ser.dev",
        username: "jameswilson",
        password: "James123!",
        address: "Makati City, Metro Manila",
        type: "admin",
        isActive: true
    },
    {
        firstName: "Admin",
        lastName: "User",
        age: "30",
        gender: "male",
        contactNumber: "09171234568",
        email: "admin@lab.dev",
        username: "adminuser",
        password: "admin123",
        address: "Admin Office",
        type: "admin",
        isActive: true
    },
    
    // ========== EDITORS (3) ==========
    {
        firstName: "Christopher",
        lastName: "Lee",
        age: "42",
        gender: "male",
        contactNumber: "09193456789",
        email: "christopher.lee@ser.dev",
        username: "christopherlee",
        password: "Chris123!",
        address: "Taguig City, Metro Manila",
        type: "editor",
        isActive: false
    },
    {
        firstName: "David",
        lastName: "Brown",
        age: "37",
        gender: "male",
        contactNumber: "09225678901",
        email: "david.brown@ser.dev",
        username: "davidbrown",
        password: "David123!",
        address: "Mandaluyong City, Metro Manila",
        type: "editor",
        isActive: false
    },
    {
        firstName: "Sarah",
        lastName: "Rodriguez",
        age: "26",
        gender: "female",
        contactNumber: "09236789012",
        email: "sarah.rodriguez@ser.dev",
        username: "sarahrodriguez",
        password: "Sarah123!",
        address: "Paranaque City, Metro Manila",
        type: "editor",
        isActive: true
    },
    
    // ========== VIEWERS (5) ==========
    {
        firstName: "Cyrus",
        lastName: "Robles",
        age: "24",
        gender: "male",
        contactNumber: "09171234570",
        email: "cyrus.robles@ser.dev",
        username: "cyrusrobles",
        password: "viewer123",
        address: "Manila",
        type: "viewer",
        isActive: true
    },
    {
        firstName: "Maria",
        lastName: "Garcia",
        age: "28",
        gender: "female",
        contactNumber: "09182345678",
        email: "maria.garcia@ser.dev",
        username: "mariagarcia",
        password: "Maria123!",
        address: "Quezon City, Metro Manila",
        type: "viewer",
        isActive: true
    },
    {
        firstName: "Jennifer",
        lastName: "Martinez",
        age: "31",
        gender: "female",
        contactNumber: "09214567890",
        email: "jennifer.martinez@ser.dev",
        username: "jennifermartinez",
        password: "Jen123!",
        address: "Pasig City, Metro Manila",
        type: "viewer",
        isActive: true
    },
    {
        firstName: "Anna",
        lastName: "Santos",
        age: "22",
        gender: "female",
        contactNumber: "09171234571",
        email: "anna.santos@ser.dev",
        username: "annasantos",
        password: "viewer123",
        address: "Quezon City",
        type: "viewer",
        isActive: true
    },
    {
        firstName: "Mark",
        lastName: "Reyes",
        age: "27",
        gender: "male",
        contactNumber: "09171234572",
        email: "mark.reyes@ser.dev",
        username: "markreyes",
        password: "viewer123",
        address: "Makati",
        type: "viewer",
        isActive: true
    }
];

async function seedAtlas() {
    try {
        // Connect to MongoDB Atlas
        console.log('📡 Connecting to MongoDB Atlas...');
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Connected to MongoDB Atlas!');
        
        // Delete all existing users
        console.log('🗑️  Clearing existing users...');
        await User.deleteMany({});
        console.log('✅ Cleared existing users');
        
        // Create new users
        console.log('👥 Creating new users...');
        
        for (const user of users) {
            // Hash the password
            const hashedPassword = await bcrypt.hash(user.password, 10);
            
            // Create user object
            const newUser = new User({
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                gender: user.gender,
                contactNumber: user.contactNumber,
                email: user.email,
                username: user.username,
                password: hashedPassword,
                address: user.address,
                type: user.type,
                isActive: user.isActive
            });
            
            // Save to database
            await newUser.save();
            console.log(`   ✅ Created: ${user.firstName} ${user.lastName} (${user.type})`);
        }
        
        // Print summary
        console.log('\n' + '='.repeat(50));
        console.log('🎉 DATABASE SEEDED SUCCESSFULLY!');
        console.log('='.repeat(50));
        console.log(`📊 Total users: ${users.length}`);
        console.log(`   - Admins: ${users.filter(u => u.type === 'admin').length}`);
        console.log(`   - Editors: ${users.filter(u => u.type === 'editor').length}`);
        console.log(`   - Viewers: ${users.filter(u => u.type === 'viewer').length}`);
        console.log('\n📋 User Credentials:');
        console.log('-'.repeat(40));
        
        users.forEach(user => {
            console.log(`   ${user.type.toUpperCase()}: ${user.email} / ${user.password}`);
        });
        
        console.log('\n✅ Done! You can now close this terminal.');
        process.exit(0);
        
    } catch (error) {
        console.error('❌ ERROR:', error.message);
        console.error('\n💡 Troubleshooting:');
        console.error('   1. Make sure your .env file has the correct MONGO_URL');
        console.error('   2. Check your internet connection');
        console.error('   3. Verify your IP is whitelisted in MongoDB Atlas');
        process.exit(1);
    }
}

// Run the seed function
seedAtlas();