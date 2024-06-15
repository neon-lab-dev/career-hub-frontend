import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    const navItems = [
        { text: 'Home', href: '#' },
        { text: 'Internships', href: '' },
        { text: 'Jobs', href: '' },
        { text: 'Programs', href: '' },
        { text: 'Courses', href: '' },
        { text: 'Contact Us', href: '' }
    ];

    return (
        <div className='flex justify-between items-center bg-white py-8 px-4'>
            <div className='flex items-center gap-8 font-Poppins'>
                <span className='text-2xl font-bold'>Logo</span>
                <ul className='flex gap-8 text-base text-neutral-600 font-semibold'>
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:text-primary-500'>
                            <Link href={item.href}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-4 font-plus-jakarta-sans'>
                <button className='text-base bg-neutral-100 rounded-lg px-6 font-semibold py-2'>Login</button>
                <button className='text-base bg-primary-500 text-white rounded-lg px-6 font-semibold py-2'>SignUp</button>
            </div>
        </div>
    );
}
export default Navbar;
