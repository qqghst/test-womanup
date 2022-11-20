import React, { useState } from 'react'
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import { storage } from './firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import UploadFiles from './UploadFiles';
import dayjs from 'dayjs';

const timeDayJs = dayjs().format('HH:mm')
const dateDayJs = dayjs().format('DD/MM/YYYY')

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [progress, setProgress] = useState(0)

    const removeTodo = (id) => {
        setTodos([...todos].filter(todo => todo.id !== id))
    }

    const isCompletedTodo = (id) => {
        const copyTodo = [...todos];
        const currentTodo = copyTodo.find(todo => todo.id === id);
        currentTodo.isCompleted = !currentTodo.isCompleted;
        setTodos(copyTodo);
    }

    const editTodo = (id) => {
        const newTodo = prompt('type new todo here to change');
        setTodos([...todos].filter((item, index) => {
            if (item.id === id) {
                item.title = newTodo
            }
            return item
        }))
    }

    const uploadFilesHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file)
    }

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            setProgress(prog)
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then((url) => console.log(url))
            }
        )
    }

    return (
        <div className=''>
            <CreateTodo setTodos={setTodos} />`
            <UploadFiles 
                uploadFilesHandler={uploadFilesHandler}
                progress={progress}
            />
            <div className='w-4/5 text-white mx-auto'>
                {todos.map((item, index) =>
                    <TodoItem
                        key={index}
                        item={item}
                        isCompletedTodo={isCompletedTodo}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                        index={index}
                        timeDayJs={timeDayJs}
                        dateDayJs={dateDayJs}
                    />
                )}
            </div>
        </div>
    )
}

export default Main