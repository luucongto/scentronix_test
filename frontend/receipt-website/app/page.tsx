'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/shop')
  }, [router])

  return null // This won't be rendered because of the redirect
}

export default Home
