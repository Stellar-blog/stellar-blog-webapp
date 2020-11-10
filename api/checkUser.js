import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

const checkUser = () => {
  const [user, setUser] = useState({
    attributes : {
      sub: null
    }
  });

  useEffect(() => {
    checkUserAuth();
    const unsubscribe = Hub.listen('auth', () => checkUserAuth());
    return () => unsubscribe();
  }, [])

  async function checkUserAuth() {
    try {
      const signedInUser = await Auth.currentAuthenticatedUser();
      setUser(signedInUser);
    } catch (err) { setUser(null); };
  }
  
  return user;
}

export default checkUser