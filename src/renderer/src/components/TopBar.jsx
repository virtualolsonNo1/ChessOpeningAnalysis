import React from 'react'

export default function TopBar() {
    
    const handleClose=()=>{
        window.electron.ipcRenderer.send("close-window")
    }
    const handleMinimize=()=>{
        window.electron.ipcRenderer.send("minimize-window")
    }
  return (
    <div>
        <div className="rounded-t-xl w-screen h-5 bg-blue-400" style={{WebkitAppRegion:"drag"}}></div>
        <div className="w-screen h-3 bg-blue-400"></div>
        <div id="control-buttons" className='text-stone-200 absolute top-1 right-0 pe-2'>
            <button id="minimize" className='p-1' onClick={handleMinimize}>&#128469;</button>
            <button id="close" className='p-1' onClick={handleClose}>&#x2715;</button>
        </div>
    </div>
  )
}
