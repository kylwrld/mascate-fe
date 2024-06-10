import React from 'react'
import Navbar from '../components/Navbar';

import {Outlet} from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MainLayout() {
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div className='flex grow overflow-y-auto'>
            <div className='flex'>
                <Sidebar></Sidebar>
            </div>
            <div className='grow overflow-y-auto'>
                <Outlet></Outlet>
            </div>
        </div>
        <ToastContainer autoClose={3000} closeOnClick position="bottom-right"/>
    </>
  )
}

export default MainLayout