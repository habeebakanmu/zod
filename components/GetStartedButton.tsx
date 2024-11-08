import Link from 'next/link'
import React from 'react'


const GetStartedButton = () => {
  return (
    <div>
      <Link href={'/zod'}>
        <button style={styles.button}>
          Get Started
        </button>
      </Link>
    </div>
  )
}
const styles: { [key: string]: React.CSSProperties } = {
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
}

export default GetStartedButton
