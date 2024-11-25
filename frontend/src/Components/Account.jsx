import React, { useState } from 'react';

const MiCuenta = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para saber se está autenticado
  const [username, setUsername] = useState(''); // Nome completo para mostrar

  const handleLogin = () => {
    // Verifica se as credenciais são corretas
    if (email === 'gabriela@magnu.com' && password === '123456') {
      setIsAuthenticated(true); // Muda o estado para autenticação bem-sucedida
      setUsername('Gabriela Sarmento'); // Aqui você coloca o nome e sobrenome do usuário
    } else {
      alert('Credenciais incorretas!');
    }
  };

  return (
    <div className="login-container">
      {isAuthenticated ? (
        // Se estiver autenticado, mostra o nome completo
        <div className="welcome-message">
          <h2>Bem-vindo, {username}</h2>
        </div>
      ) : (
        // Se não estiver autenticado, mostra o formulário de login
        <div className="login-form">
          <h2>Login</h2>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Digite su contrasena"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      )}
    </div>
  );
};

export default MiCuenta;
