import { ref, Ref } from 'vue';
import { api } from './useApi';

interface User {
  id: number;
  name: string;
  email: string;
}

const user: Ref<User | null> = ref(null);

interface LoginResponse {
  user: User;
  token: string;
}

export function useAuth() {
  const loading = ref(false);

 async function login(email: string, password: string): Promise<void> {
  loading.value = true;
  try {
    const response = await api<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    user.value = response.user;
    localStorage.setItem('token', response.token);
  } finally {
    loading.value = false;
  }
}


  function logout(): void {
    user.value = null;
    localStorage.removeItem('token');
  }

  function getToken(): string | null {
    return localStorage.getItem('token');
  }

  async function fetchUser(): Promise<void> {
    const token = getToken();
    if (!token) return;
    try {
      const response = await api<User>('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      user.value = response;
    } catch {
      logout();
    }
  }

  return { user, login, logout, fetchUser, loading, getToken };
}
