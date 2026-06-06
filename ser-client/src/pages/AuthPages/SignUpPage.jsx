import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUpPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', age: '', gender: '', contactNumber: '',
        email: '', username: '', password: '', address: '', type: 'viewer', isActive: true
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters');
            setLoading(false);
            return;
        }
        if (!/^\d{11}$/.test(formData.contactNumber)) {
            setError('Contact number must be exactly 11 digits');
            setLoading(false);
            return;
        }
        if (formData.username.includes(' ')) {
            setError('Username must not contain spaces');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/auth/signin');
            } else {
                const data = await response.json();
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* LEFT SIDE - BRANDING */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-red-900 to-red-800 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col justify-center px-12 w-full">
                    <div className="mb-8">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">Y</span>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Join
                        <span className="block text-red-300">Yoyetz Studio</span>
                    </h1>
                    <p className="mt-4 text-gray-200 text-lg">
                        Create an account and start your journey with us.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <div className="bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                            <p className="text-red-300 text-xl font-bold">Free</p>
                            <p className="text-gray-300 text-xs">Sign up</p>
                        </div>
                        <div className="bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                            <p className="text-red-300 text-xl font-bold">Secure</p>
                            <p className="text-gray-300 text-xs">Account</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-8 overflow-y-auto">
                <div className="w-full max-w-lg">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">Y</span>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                            <p className="text-gray-500 text-sm mt-2">Fill in your details to get started</p>
                        </div>

                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                                    <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required>
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                                <p className="text-xs text-gray-400 mt-1">No spaces allowed</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400">
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">At least 8 characters</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                <input type="tel" name="contactNumber" placeholder="09123456789" value={formData.contactNumber} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" required />
                                <p className="text-xs text-gray-400 mt-1">Exactly 11 digits</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <textarea name="address" rows="2" value={formData.address} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none" required></textarea>
                            </div>

                            <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-[1.02] mt-2">
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600 mt-6">
                            Already have an account?{' '}
                            <Link to="/auth/signin" className="text-red-600 font-semibold hover:text-red-700">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;