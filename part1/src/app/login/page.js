'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()
    return (
    <div>
        
 <h1>       Login</h1>
 <button onClick={()=>router.push('/login/login-teachers')}>Login as Teacher </button>
 <button onClick={()=>router.push('/login/login-students')}>Login as Students </button>
        <br />
        <Link href="/"> Home page</Link>
        </div>
  )
}

export default Login