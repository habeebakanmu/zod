"use client";

import React, { useState } from 'react'
import CalculateZodiacSignButton from './CalculateZodiacSignButton';

const ZodPage = () => {
    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('January');
    const [zodiacSign, setZodiacSign] = useState<string>('');
    const [linkForZodiacSign, setLinkForZodiacSign] = useState<string>('');
    const [colorForZodiacSign, setColorForZodiacSign] = useState<string>('');
  
    const getMonthNumber = (monthName: string): number => {
      const months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return months.indexOf(monthName) + 1;
    };
  
    const calculateZodiacSign = (): void => {
      const dayInt = parseInt(day, 10);
      const monthInt = getMonthNumber(month);
  
      if (isNaN(dayInt) || dayInt < 1 || dayInt > 31) {
        alert('Invalid Date. Please enter a valid day.');
        return;
      }
  
      let sign = '';
      let link = '';
      let color = '';
  
      if ((monthInt === 1 && dayInt >= 20) || (monthInt === 2 && dayInt <= 18)) {
        sign = 'Aquarius';
        link = 'https://www.horoscope.com/zodiac-signs/aquarius';
        color = '#1E90FF';
      } else if ((monthInt === 2 && dayInt >= 19) || (monthInt === 3 && dayInt <= 20)) {
        sign = 'Pisces';
        link = 'https://www.horoscope.com/zodiac-signs/pisces';
        color = '#6495ED';
      } else if ((monthInt === 3 && dayInt >= 21) || (monthInt === 4 && dayInt <= 19)) {
        sign = 'Aries';
        link = 'https://www.horoscope.com/zodiac-signs/aries';
        color = '#FF4500';
      } else if ((monthInt === 4 && dayInt >= 20) || (monthInt === 5 && dayInt <= 20)) {
        sign = 'Taurus';
        link = 'https://www.horoscope.com/zodiac-signs/taurus';
        color = '#FF6347';
      } else if ((monthInt === 5 && dayInt >= 21) || (monthInt === 6 && dayInt <= 20)) {
        sign = 'Gemini';
        link = 'https://www.horoscope.com/zodiac-signs/gemini';
        color = '#FF8C00';
      } else if ((monthInt === 6 && dayInt >= 21) || (monthInt === 7 && dayInt <= 22)) {
        sign = 'Cancer';
        link = 'https://www.horoscope.com/zodiac-signs/cancer';
        color = '#FFD700';
      } else if ((monthInt === 7 && dayInt >= 23) || (monthInt === 8 && dayInt <= 22)) {
        sign = 'Leo';
        link = 'https://www.horoscope.com/zodiac-signs/leo';
        color = '#DAA520';
      } else if ((monthInt === 8 && dayInt >= 23) || (monthInt === 9 && dayInt <= 22)) {
        sign = 'Virgo';
        link = 'https://www.horoscope.com/zodiac-signs/virgo';
        color = '#ADFF2F';
      } else if ((monthInt === 9 && dayInt >= 23) || (monthInt === 10 && dayInt <= 22)) {
        sign = 'Libra';
        link = 'https://www.horoscope.com/zodiac-signs/libra';
        color = '#32CD32';
      } else if ((monthInt === 10 && dayInt >= 23) || (monthInt === 11 && dayInt <= 21)) {
        sign = 'Scorpio';
        link = 'https://www.horoscope.com/zodiac-signs/scorpio';
        color = '#228B22';
      } else if ((monthInt === 11 && dayInt >= 22) || (monthInt === 12 && dayInt <= 21)) {
        sign = 'Sagittarius';
        link = 'https://www.horoscope.com/zodiac-signs/sagittarius';
        color = '#008080';
      } else if ((monthInt === 12 && dayInt >= 22) || (monthInt === 1 && dayInt <= 19)) {
        sign = 'Capricorn';
        link = 'https://www.horoscope.com/zodiac-signs/capricorn';
        color = '#4682B4';
      }
  
      setZodiacSign(sign);
      setLinkForZodiacSign(link);
      setColorForZodiacSign(color);
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Find Your Zodiac Sign</h1>
        <input
          type="number"
          placeholder="Day (1-31)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={styles.input}
        />
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={styles.select}
        >
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((monthName) => (
            <option key={monthName} value={monthName}>{monthName}</option>
          ))}
        </select>
        <CalculateZodiacSignButton calculateZodiacSign={calculateZodiacSign} styleForButton={styles.button} />
        {zodiacSign && (
          <p style={styles.result}>
            Your Zodiac Sign is: <a href={linkForZodiacSign} target="_blank" rel="noopener noreferrer" style={{ color: colorForZodiacSign }}>{zodiacSign}</a>
          </p>
        )}
      </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      padding: '0 20px',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #fff',
      color: '#000',
    },
    select: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      color: '#000',
    },
    button: {
      padding: '10px 20px',
      marginBottom: '20px',
      backgroundColor: '#1E90FF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    result: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
  };
export default ZodPage
