import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('userType', data.type);
                localStorage.setItem('userName', data.firstName);
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = '/';
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Cannot connect to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* LEFT SIDE - BRANDING */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col justify-center px-12 w-full">
                    <div className="mb-8">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-900">Y</span>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Welcome
                        <span className="block text-yellow-500">Back</span>
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg">
                        Access your dashboard and manage everything in one place.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <div className="bg-white/10 rounded-xl px-4 py-2">
                            <p className="text-yellow-500 text-xl font-bold">Secure</p>
                            <p className="text-gray-400 text-xs">Login</p>
                        </div>
                        <div className="bg-white/10 rounded-xl px-4 py-2">
                            <p className="text-yellow-500 text-xl font-bold">24/7</p>
                            <p className="text-gray-400 text-xs">Access</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-10">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-5">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-gray-900">Y</span>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                            <p className="text-gray-500 text-sm mt-1">Enter your credentials</p>
                        </div>

                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-2 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                                    placeholder="admin@lab.dev"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-5">
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="checkbox" className="rounded border-gray-300" /> Remember me
                                </label>
                                <button type="button" className="text-sm text-yellow-600 hover:text-yellow-700">
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition"
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>

                        <div className="relative my-5">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-white text-gray-400">Or</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm">
                                G Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm">
                                🛠️ GitHub
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-600 mt-5">
                            Don't have an account?{' '}
                            <Link to="/auth/signup" className="text-yellow-600 font-semibold">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;