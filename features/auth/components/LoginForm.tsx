'use client';

import { useState } from 'react';
import { authApi, getErrorMessage } from '@/features/auth/api/authApi';

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setLoading(true);
    setError('');
    
    try {
      await authApi.login({
        username: formData.get('username') as string,
        password: formData.get('password') as string,
      });
      // ریدایرکت به home انجام می‌شود (در useAuthContext یا همینجا)
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="text-red-500">{error}</div>}
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}