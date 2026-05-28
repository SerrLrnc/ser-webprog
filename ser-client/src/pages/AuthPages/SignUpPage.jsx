import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        contactNumber: '',
        email: '',
        username: '',
        password: '',
        address: '',
        type: 'viewer',  // Default role for new users
        isActive: true
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validation
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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Auto login after signup
                const loginResponse = await fetch('http://localhost:5000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password
                    }),
                });

                const loginData = await loginResponse.json();

                if (loginResponse.ok) {
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('token', loginData.token);
                    localStorage.setItem('userType', loginData.type);
                    localStorage.setItem('userName', loginData.firstName);
                    
                    // Redirect based on role
                    if (loginData.type === 'viewer') {
                        navigate('/articles');
                    } else {
                        navigate('/');
                    }
                } else {
                    navigate('/auth/signin');
                }
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            console.error('Signup error:', err);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-white/20 bg-white p-8 shadow-2xl sm:p-10">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Create an account</h1>
                <p className="mt-2 text-sm text-zinc-500">Join us today!</p>
            </div>

            {error && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                    <p className="mt-1 text-xs text-zinc-400">No spaces allowed</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700">Contact Number</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        placeholder="09123456789"
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                    <p className="mt-1 text-xs text-zinc-400">Must be exactly 11 digits</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                    <p className="mt-1 text-xs text-zinc-400">At least 8 characters</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows="2"
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-red-500 py-3 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50"
                >
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-zinc-500">
                Already have an account?{' '}
                <Link to="/auth/signin" className="font-semibold text-red-500 hover:text-red-600">
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default SignUpPage;