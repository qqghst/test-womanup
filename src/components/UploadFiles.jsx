import React from 'react'

const UploadFiles = ({ uploadFilesHandler, progress }) => {
    return (
        <div>
            <form className='flex flex-col justify-start items-center gap-[8px]' onSubmit={uploadFilesHandler}>
                <input type="file" className='input' />
                <button type='submit' className='border-2 rounded-md border-white bg-white cursor-pointer px-[4px] py-[2px]'>Upload</button>
                {/* <p>{progress}% has been uploaded</p> */}
            </form>
        </div>
    )
}

export default UploadFiles