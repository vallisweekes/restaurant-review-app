export const mediaFix = window.matchMedia('max-width: 568px')
  ? {
      width: '100%',
      height: '200px',
      position: 'fixed',
      zIndex: 100,
      top: '12rem',
      paddingRight: '0.5rem',
      marginBottom: '2rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #cfcfd0',
      boxSizing: 'border-box'
    }
  : window.matchMedia('max-width: 758px')
  ? {
      width: '100%',
      height: '200px',
      position: 'fixed',
      zIndex: 100,
      top: '13rem',
      paddingRight: '0.5rem',
      marginBottom: '3rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #cfcfd0',
      boxSizing: 'border-box'
    }
  : { width: '100%', height: '100%', position: 'fixed' };

export default mediaFix;
