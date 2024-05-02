import { useState, useEffect } from "react";

const MOBILE_WIDTH_THRESHOLD: number = 500

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < MOBILE_WIDTH_THRESHOLD)
  }

  useEffect(() =>{
    checkIsMobile()

    window.addEventListener('resize', () => checkIsMobile())

    return (
      window.removeEventListener('resize', () => checkIsMobile())
    )
  }, [])

  return isMobile
}

export default useIsMobile