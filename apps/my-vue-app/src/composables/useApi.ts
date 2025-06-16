const API_BASE = import.meta.env.VITE_API_URL;

export async function api<T>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
