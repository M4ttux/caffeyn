const API_URL = import.meta.env.VITE_API_URL;


/**
 * Funcion para iniciar sesion
 * 
 * @param {string} email 
 * @param {string} password
 * 
 * @return token o error
 */
export async function login(email, password) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  
  if (data.msg === 'success' && data.data && data.data.jwt) {
    
    return { token: data.data.jwt };
  } else {
    return { error: data.msg || 'Error al iniciar sesión' };
  }
}

/**
 * Funcion para registrar y redirigir al login
 * 
 * @param {string} name
 * @param {string} email 
 * @param {string} password
 * 
 * @return token o error
 */
export async function register(name, email, password) {
  const res = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  console.log('Respuesta register:', data);

  // Si existe el jwt en la raíz de la respuesta, lo devolvemos
  if (data.jwt) {
    return { token: data.jwt };
  }

  // Si hay mensaje de error, lo devolvemos
  return { 
    error: data.msg || 'Error al registrar usuario', 
    errors: data.errors || null 
  };
}

/**
 * Guardar token jwt en localStorage
 * 
 * @param {string} token
 * 
 * @return token o error
 */
export function saveToken(token) {
  localStorage.setItem('token', token);
}

/**
 * Funcion para obtener token jwt del localStorage
 * 
 * @param {string} email 
 * @param {string} password
 * 
 * @return token o error
 */
export function getToken() {
  const token = localStorage.getItem('token');
  return token;
}

/**
 * Funcion para obtener el payload del token
 * 
 * @return payload
 */
export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (err) {
    return null;
  }
};

/**
 * Remover token JWT del localStorage y redirigir a la pantalla de login
 */
export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
