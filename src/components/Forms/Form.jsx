import { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input value={username} onChange={e => setUsername(e.target.value)} name='username' />
        </label>
        <label>
          <span>Email:</span>
          <input value={email} onChange={e => setEmail(e.target.value)} name='email' type='email' />
        </label>
        <label>
          <span>Password:</span>
          <input value={password} onChange={e => setPassword(e.target.value)} name='password' type='password' />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default Form;
