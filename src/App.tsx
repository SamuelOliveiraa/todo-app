import GlobalStyleLight from './Styles/theme-ligth'
import GlobalStyleDark from './Styles/theme-dark'
import { useState } from 'react';


const App = () => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme)
  }

  return(
    <>
      {theme === true ? <GlobalStyleLight/> : <GlobalStyleDark/>}

    </>
  );
}

export default App;