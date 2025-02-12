import React from 'react';
import MenuElement from './menuElement';
import MenuSeperator from './menuSeperator';

export default function Navbar() {
    const toggleMenu = (a) => {
        const navbarMenu = document.getElementById("navbarMenu")
        const menuIcon = document.getElementById("navbarToggleIcon")
        const content = document.getElementById("mainContent")
        const toggleMenuButton = document.getElementById("navbarToggleButton")
        if ((navbarMenu.classList.contains("max-lg:translate-x-0")&& window.innerWidth<1024)||(navbarMenu.classList.contains("translate-x-0") && window.innerWidth>=1024)) {
            navbarMenu.classList.add("max-lg:-translate-x-full")
            navbarMenu.classList.remove("max-lg:translate-x-0")
            navbarMenu.classList.add("-translate-x-full")
            navbarMenu.classList.remove("translate-x-0")
            menuIcon.classList.add("rotate-180")
            menuIcon.classList.add("max-lg:rotate-180")
            menuIcon.classList.add("ml-3")
            menuIcon.classList.add("max-lg:ml-3")
            content.classList.remove("ml-[270px]")
            content.classList.remove("w-[calc(100vw-270px)]")
            content.classList.add("w-[100vw]")
            toggleMenuButton.classList.remove("max-lg:right-0")
            toggleMenuButton.classList.add("max-lg:right-[-14px]")
        } else {
            navbarMenu.classList.add("translate-x-0")
            navbarMenu.classList.remove("-translate-x-full")
            navbarMenu.classList.add("max-lg:translate-x-0")
            navbarMenu.classList.remove("max-lg:-translate-x-full")
            menuIcon.classList.remove("rotate-180")
            menuIcon.classList.remove("max-lg:rotate-180")
            menuIcon.classList.remove("ml-3")
            menuIcon.classList.remove("max-lg:ml-3")
            content.classList.add("ml-[270px]")
            content.classList.remove("w-[100vw]")
            content.classList.add("w-[calc(100vw-270px)]")
            toggleMenuButton.classList.remove("max-lg:right-[-14px]")
            toggleMenuButton.classList.add("max-lg:right-0")
        }
    };
    return (
        <div id="navbarMenu" className="min-w-[270px] max-h-[100lvh] h-[100lvh] flex-col bg-mainBlue ease-in-out transition-transform duration-1000 absolute translate-x-0 max-lg:-translate-x-full max-lg:w-full z-50">
            <div className='py-[12px] px-[10px] relative box-border border-b-[1px] border-solid border-b-transparentBorder'>
                <a href='#' className='px-[4px] h-[40px] gap-[5px] flex'>
                    <img src="/icons/menu/logo.png" alt="" className='h-full' />
                    <img src="/icons/menu/logoType.png" alt="" className='h-full' />
                    <button id='navbarToggleButton' onClick={(e) => toggleMenu(e)} className='border-[3px] border-mainBlue bg-white hover:bg-slate-200 rounded-full transition-all ease-in-out duration-1000 size-[30px] -translate-y-1/2 absolute top-1/2 lg:right-[-14px] max-lg:right-[-14px] max-lg:border-hoverMainBlue p-[6px] justify-center flex'>
                        <img id='navbarToggleIcon' src="/icons/menu/arrowLeft.png" alt="" className="h-full transition-all max-lg:rotate-180 max-lg:ml-3 ease-in-out duration-1000" />
                    </button>
                </a>
            </div>
            <div className='elementContainer px-[10px] py-[20px] h-[calc(100vh-65px)] overflow-auto flex flex-col border-t-[1px] border-solid border-t-transparentBorder gap-[5px]'>
                <MenuElement elementTitle="Dashboard" elementIcon="dashboard" />
                <MenuSeperator title="SALES" />
                <MenuElement elementTitle="Invoices" elementIcon="invoices" />
                <MenuElement elementTitle="Incomes" elementIcon="incomes" />
                <MenuElement elementTitle="Customers" elementIcon="buildings" />
                <MenuSeperator title="PURCHASE" />
                <MenuElement elementTitle="Bills" elementIcon="bills" />
                <MenuElement elementTitle="Expenses" elementIcon="expenses" selected />
                <MenuElement elementTitle="Vendors" elementIcon="buildings" />
                <MenuSeperator title="CASH" />
                <MenuElement elementTitle="Cash & Bank" elementIcon="bank" />
                <MenuElement elementTitle="Cash Flow" elementIcon="wallet" />
                <MenuSeperator title="STOCK" />
                <MenuElement elementTitle="Products & Services" elementIcon="tag" />
                <MenuSeperator title="ACCOUNTING" />
                <MenuElement elementTitle="Transactions" elementIcon="transactions" />
                <MenuElement elementTitle="Chart of Accounts" elementIcon="document" />
                <MenuSeperator title="REPORTS" />
                <MenuElement elementTitle="All Reports" elementIcon="health" />
            </div>
        </div>
    );
}
