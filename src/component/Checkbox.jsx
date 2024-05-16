import React, { useState } from 'react'
import usePasswordGenerate from './usePasswordGenerate'
import PasswordRange from './PasswordRange'
import PasswordShow from './PasswordShow'
import PasswordStrength from './PasswordStrength'

const Checkbox = () => {
    const [checkBoxData, setCheckBoxData] = useState([
        { title: 'Include UpperCase Letters', checked: false },
        { title: 'Include LowerCase Letters', checked: false },
        { title: 'Include Numbers', checked: false },
        { title: 'Include Special Characters', checked: false },
    ])

    // const [length,setLength]=useState(4)

    const { password, errorMsg, generatePassword } = usePasswordGenerate()

    const checkBoxHandle = (index) => {
        let updateCheckBox = [...checkBoxData]
        updateCheckBox[index].checked = !updateCheckBox[index].checked
        setCheckBoxData(updateCheckBox)
    }

    return (
        <React.Fragment>
            <PasswordShow password={password}/>
            <PasswordRange length={length} setLength={setLength}/>
            <div className="checkbox-container">
                {
                    checkBoxData.map((checkBox, idx) => {
                        return (
                            <div key={idx}>
                                <input
                                    type="checkbox"
                                    onChange={() => checkBoxHandle(idx)}
                                />
                                <span>{checkBox.title}</span>
                            </div>
                        )
                    })
                }
            </div>
            <PasswordStrength password={password}/>
            {errorMsg && <div className='error-msg'>{errorMsg}</div>}
            <button className="generateBtn" onClick={() => generatePassword(checkBoxData, length)}>Generate Password</button>
        </React.Fragment>
    )
}

export default Checkbox
