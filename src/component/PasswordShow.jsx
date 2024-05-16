import React, { useState } from 'react'

const PasswordShow = ({password}) => {
    const [copyBtn, setCopyBtn] = useState('copy')
    const copyPassword = () => {
        navigator.clipboard.writeText(password)
        setCopyBtn('copied')
        setTimeout(() => {
            setCopyBtn('copy')
        }, 1000)
    }
    if(password.length ===0){
        return 
    }
    return (
        <div className="password-show">
            {password}
            <button onClick={() => copyPassword()}>{copyBtn}</button>
        </div>
    )
}

export default PasswordShow
