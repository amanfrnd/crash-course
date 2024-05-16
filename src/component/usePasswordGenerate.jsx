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
                case 'Choose UpperCase Letters':
                    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                    break;
                case 'Choose LowerCase Letters':
                    charset += 'abcdefghijklmnopqrstuvwxyz'
                    break;
                case 'Choose Numbers':
                    charset += '0123456789'
                    break;
                case 'Choose Special Characters':
                    charset += '@#$%^&*()!'
                    break;
                default:
                    break;
            }
        })

        for (let i = 0; i < length; i++) {
            const randomIdx = Math.floor(Math.random() * charset.length)
            generatePass += charset[randomIdx]
        }
        setPassword(generatePass)
        setErrorMsg('')
    }

    return { password, errorMsg, generatePassword }
}

export default usePasswordGenerate
