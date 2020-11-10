import { useState, useEffect } from 'react' 

const useResize = () => {
    const [isMobile, setIsMibile] = useState(0)

    useEffect(() => {
      setIsMibile(window.innerWidth <= 600)
    }, [])

    useEffect(() => {
        const handleResize = () => setIsMibile(window.innerWidth <= 600)
        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile
}

export default useResize



