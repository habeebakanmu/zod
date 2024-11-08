import GetStartedButton from '@/components/GetStartedButton';
import Welcome from '@/components/Welcome';
import React from 'react';

const Home: React.FC = () => {


  return (
    <div style={styles.container}>
      <Welcome />
      <GetStartedButton />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '0 20px',
  },
  
};

export default Home;
