'use client'

import Link from 'next/link';
import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';
import React, { useState } from 'react';


interface pageProps { 
    email:string
    password:string
    usename:string
}

const SignupPage: FC<pageProps> = ({ }) => {
    const[user,setUser] = useState({
        email:"",
        password:"",
        username:""
    })

    const onSignup =async () => {
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value })}
                placeholder="username"
            />

             <label htmlFor="email">email</label>
            <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value })}
                placeholder="email"
            />

             <label htmlFor="password">password</label>
            <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value })}
                placeholder="password"
            />
            <button 
            onClick={onSignup}
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
                Signup here
            </button>

            <Link 
                href="/login">
                    Visit Login
            </Link>

        </div>
    );
}
export default SignupPage;