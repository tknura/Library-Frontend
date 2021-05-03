import { useEffect, useState } from 'react'

interface WindowSizes {
  width?: number
  height?: number
}

export const useWindowSize = (): WindowSizes => {
  const [windowSize, setWindowSize] = useState<WindowSizes>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
