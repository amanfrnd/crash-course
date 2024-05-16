import React, { useState } from 'react'

const usePasswordGenerate = () => {
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const generatePassword = (checkBoxData, length) => {
        let charset = ""
        let generatePass = ""
        let selectedOption = checkBoxData.filter((checkbox) => checkbox.checked)

        if (selectedOption.length === 0) {
            setErrorMsg('Please Select One Checkbox Option!!!')
            setPassword('')
            return
        }

        selectedOption.forEach((option) => {
            switch (option.title) {
                case 'Include UpperCase Letters':
                    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                    break;
                case 'Include LowerCase Letters':
                    charset += 'abcdefghijklmnopqrstuvwxyz'
                    break;
                case 'Include Numbers':
                    charset += '0123456789'
                    break;
                case 'Include Special Characters':
                    charset += '@#$%^&*()!'
                    break;
                default:
                    break;
            }
        })

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatePass += charset[randomIndex]
        }
        setPassword(generatePass)
        setErrorMsg('')
    }

    return { password, errorMsg, generatePassword }
}

export default usePasswordGenerate
