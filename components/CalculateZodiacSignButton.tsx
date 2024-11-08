import React from 'react'

const CalculateZodiacSignButton = ({ calculateZodiacSign, styleForButton }: { calculateZodiacSign: () => void, styleForButton: React.CSSProperties }) => {
  return (
    <div>
        <button onClick={calculateZodiacSign} style={styleForButton}>
            Calculate Zodiac Sign
        </button>
    </div>
  )
}

export default CalculateZodiacSignButton
