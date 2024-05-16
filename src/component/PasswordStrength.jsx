import React from 'react'

const PasswordStrength = ({password}) => {
  const passwordLength=password.length

  const checkStrength = () => {
    if(passwordLength < 1){
      return ''
    }
    else if (passwordLength < 4) {
      return 'Very Weak'
    }
    else if (passwordLength < 8) {
      return 'Poor'
    }
    else if (passwordLength < 12) {
      return 'Medium'
    }
    else if (passwordLength < 16) {
      return 'Strong'
    }
    else {
      return 'Very Strong'
    }
  }

  const getStrength=checkStrength()
  if(!getStrength) return <React.Fragment />

  return (
    <div className='strength'>
      <h2>Strength</h2>
      <h2>{getStrength}</h2>
    </div>
  )
}

export default PasswordStrength
