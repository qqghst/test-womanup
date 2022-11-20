import React, { useState } from 'react'

const Input = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        if (title.length !== 0) {
            setTodos(prev => [
                {
                    id: new Date(),
                    title,
                    isCompleted: false
                },
                ...prev,
            ])
        }
        setTitle('')
    }
 
    return (
        <div className='flex flex-row items-center justify-center mb-[48px] gap-[32px]'>
            <input
                className='px-[16px] py-[12px] bg-transparent border-[#393E46] border-2 rounded-xl text-slate-400 text-[13.3px] w-[50%]'
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                placeholder='Press enter to save your todo'
            />
            <button className='flex lg:hidden items-center justify-center w-[48px] h-[48px] border-2 border-[#393E46] rounded-lg cursor-pointer' onClick={() => addTodo(title)}>
                <svg className='w-[32px] h-[32px] fill-slate-400' viewBox="0 0 24 24">
                    <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" data-name="plus" />
                </svg>
            </button>
        </div>
    )
}

export default Input