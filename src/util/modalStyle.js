export const mediaFix = window.matchMedia('max-width: 420px')
  ? {
      width: '100%',
      height: '210px',
      position: 'fixed',
      zIndex: 100,
      top: '13rem',
      paddingRight: '0.5rem',
      marginBottom: '3rem',
      borderBottom: '1px solid #cfcfd0',
      boxSizing: 'border-box'
    }
  : 'max-width: 768px'
  ? {
      width: '100%',
      height: '190px',
      position: 'fixed',
      zIndex: 100,
      top: '13rem',
      paddingRight: '0.5rem',
      marginBottom: '3rem',
      borderBottom: '1px solid #cfcfd0',
      boxSizing: 'border-box'
    }
  : { width: '100%', height: '100%', position: 'fixed' };

export default mediaFix;
