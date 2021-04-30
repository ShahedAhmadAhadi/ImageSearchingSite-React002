import React from 'react'

function ThemeCheckbox() {
    return (
        <div>
            <label className="w-3 h-1 bg-gray-200 rounded-full" for="check"></label>
            <input type='checkbox' id="check" className="hidden" />
        </div>
    )
}

export default ThemeCheckbox
