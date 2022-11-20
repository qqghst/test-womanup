import React from 'react';
// import { check } from '../assets/imports';

const Checkbox = ({ isCompleted }) => {
    return (
        <div className={`flex items-center justify-center w-[20px] h-[20px] border-2 rounded-md border-[#00ADB5] cursor-pointer ${isCompleted ? 'bg-[#00ADB5]' : ''}`}>
            {isCompleted &&
                <svg className='w-[12px] h-[12px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
            }

        </div>
    )
}

export default Checkbox