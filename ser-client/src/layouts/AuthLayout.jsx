import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store user data
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('token', data.token);
                localStorage.setItem('userType', data.type);
                localStorage.setItem('userName', data.firstName);
                
                // Redirect based on role
                if (data.type === 'viewer') {
                    navigate('/articles');  // Viewers go to articles
                } else {
                    navigate('/');  // Admins and editors go to dashboard
                }
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-white/20 bg-white p-8 shadow-2xl sm:p-10">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Welcome back</h1>
                <p className="mt-2 text-sm text-zinc-500">Please enter your details</p>
            </div>
            
            {error && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                    {error}
                </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-zinc-700">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-red-400 focus:bg-white focus:ring-1 focus:ring-red-400"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-red-400 focus:bg-white focus:ring-1 focus:ring-red-400"
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full rounded-lg bg-red-500 py-3 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-50"
                >
                    {loading ? 'Logging in...' : 'Sign In'}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-500">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="font-semibold text-red-500 hover:text-red-600">
                    Create an account
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;