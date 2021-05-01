import React from 'react'

function head(props) {
    let themeValue = {
        textColor: 'yellow-800',
        bgOpaciry: '80'
    }
    return (
        <header className={`p-4 md:w-80 relative text-center h-16 cursor-pointer hover:h-48 overflow-hidden w-full font-bold text-${props.theme ? 'white' : themeValue.textColor} bg-opacity-${props.theme ? '100' : themeValue.bgOpaciry} float-left text-xl`}>
            <i className="bi bi-images mx-2 text-2xl"></i>
            <span className={``}>GALLERY
            {/* <div className="absolute inset-0 top-16 w-48 m-auto bg-white text-black">
                <a href="#" >aa</a>
            </div> */}
            </span>
            
        </header>
    )
}

export default head
