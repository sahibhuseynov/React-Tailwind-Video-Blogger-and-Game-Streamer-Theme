import React from 'react'

const Fotter = () => {
    return ( <
        div className = 'py-28 bg-fotterbackground' >
        <
        div className = "container mx-auto flex flex-col items-center justify-center " >
        <
        img className = 'w-28 h-5 object-cover mb-8'
        src = "https://wp.nkdev.info/redlens/dark/wp-content/themes/redlens/assets/images/logo-night.svg"
        alt = "" / >
        <
        div className = 'flex gap-x-6 text-white text-base font-semibold mb-10' >
        <
        a className = 'transition hover:text-redd'
        href = "#" >
        Youtube <
        /a> <
        a className = 'transition hover:text-blue-700'
        href = "#" >
        Twitter <
        /a> <
        a className = 'transition hover:text-pink-700'
        href = "#" >
        Instagram <
        /a> <
        a className = 'transition hover:text-green-900'
        href = "#" >
        Medium <
        /a> <
        /div> <
        div >
        <
        span className = 'text-footername text-sm' > Copyright 2022 by sH < /span> <
        /div> <
        /div> <
        /div>
    )
}

export default Fotter