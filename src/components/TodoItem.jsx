import React from 'react';
import Checkbox from './Checkbox';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';

const TodoItem = ({ item, isCompletedTodo, removeTodo, editTodo, dateDayJs, timeDayJs }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className={`flex flex-row justify-between items-center gap-[16px] p-[16px] bg-[#393E46] rounded-xl mb-[12px] w-[50%]`}>
                <div className='flex flex-row gap-[16px] justify-center items-center'>
                    <div onClick={() => isCompletedTodo(item.id)}>
                        <Checkbox isCompleted={item.isCompleted} />
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        {item.isCompleted ? <p className='line-through'>{item.title}</p> : <p>{item.title}</p>}
                        <div className='text-[9.26px]'>
                            {timeDayJs} <br />
                            {dateDayJs}
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-[32px]'>
                    <div onClick={() => editTodo(item.id)}>
                        <EditTodo />
                    </div>
                    <div onClick={() => removeTodo(item.id)}>
                        <DeleteTodo onClick={() => removeTodo(item.id)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem