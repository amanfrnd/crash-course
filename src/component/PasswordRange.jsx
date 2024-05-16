import React,{useState} from 'react'

const PasswordRange = ({length,setLength}) => {
    return (
        <>
            <div className='character-length'>
                <h2>Character</h2>
                <h2>{length}</h2>
            </div>
            <input
                type="range"
                min="4"
                max="20"
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />
        </>
    )
}

export default PasswordRange
