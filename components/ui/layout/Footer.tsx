/** @format */
"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-black text-white py-6 mt-16'>
      <div className='container mx-auto  px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
        <div>
          <h2 className='text-lg font-semibold mb-2'>MySite</h2>
          <p className='text-sm'>© 2025 MySite. All rights reserved.</p>
        </div>

        <div>
          <h3 className='font-semibold mb-2'>Quick Links</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a href='#' className='hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Cars
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold mb-2'>Connect</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a href='#' className='hover:underline'>
                Facebook
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Instagram
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
