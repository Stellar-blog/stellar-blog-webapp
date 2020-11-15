import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const checkUser = () => {
  const [user, setUser] = useState({
    attributes : {
      sub: null,
    },
    username : null
  })
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    try {
      const signedInUser = await Auth.currentAuthenticatedUser()
      setUser(signedInUser)
    } catch (err) { 
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])
  
  return {
    user,
    loading
  }
}

export default checkUser