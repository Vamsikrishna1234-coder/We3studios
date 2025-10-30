import React from 'react';


function FooterImage() {
  return (
    <footer
      style={{
        width: '100vw',
        background: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        boxSizing: 'border-box',
        marginLeft: 'calc(-50vw + 50%)', 
        margintop:'40px',
      }}
    >
    
      <p>&copy; {new Date().getFullYear()} We3Studios. All rights reserved.</p>
    </footer>
  );
}

export default FooterImage;