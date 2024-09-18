import React from 'react'
import {Link} from 'react-router-dom'

const navLinks = [
    {title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export const Navigation = () => {
  return (
    <>
    <nav className='site-navigation'>
        <span>My React Blog</span>
        <ul>
            {navLinks.map((link, index) => {
            <li  key={index} >

            </li>
            })
               
            }
        </ul>
    </nav>
    </>
  );
};
