import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../constants';

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
             const response = await fetch(`${constants.API_URL}/users/login`, {
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
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-red-900 to-red-800 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col justify-center px-12 w-full">
                    <div className="mb-8">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">Y</span>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Welcome to
                        <span className="block text-red-300">Yoyetz Studio</span>
                    </h1>
                    <p className="mt-4 text-gray-200 text-lg">
                        Access your dashboard and manage everything in one place.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <div className="bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                            <p className="text-red-300 text-xl font-bold">Secure</p>
                            <p className="text-gray-300 text-xs">Login</p>
                        </div>
                        <div className="bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                            <p className="text-red-300 text-xl font-bold">24/7</p>
                            <p className="text-gray-300 text-xs">Access</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-10">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">Y</span>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
                            <p className="text-gray-500 text-sm mt-2">Enter your credentials to continue</p>
                        </div>

                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin}>
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    placeholder="admin@lab.dev"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="checkbox" className="rounded border-gray-300" /> Remember me
                                </label>
                                <button type="button" className="text-sm text-red-600 hover:text-red-700 font-medium">
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-[1.02]"
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-white text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition text-sm font-medium">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition text-sm font-medium">
                                <svg className="w-5 h-5" fill="#333" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                                GitHub
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-600 mt-6">
                            Don't have an account?{' '}
                            <Link to="/auth/signup" className="text-red-600 font-semibold hover:text-red-700">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;