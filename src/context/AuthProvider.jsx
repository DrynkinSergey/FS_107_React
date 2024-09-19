import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const login = username => {
    if (username === 'admin' || username === 'Petya') {
      setUser(username);
    } else {
      toast.error('Invalid account!!! ❌');
    }
  };
  const logout = () => setUser('');

  const contextValue = {
    user,
    login,
    logout,
  };
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};
export default AuthProvider;
