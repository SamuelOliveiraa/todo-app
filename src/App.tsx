import GlobalStyleLight from "./Styles/theme-ligth";
import GlobalStyleDark from "./Styles/theme-dark";
import AppContainer from "./Components/AppContainer";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <>
      {theme ? <GlobalStyleLight /> : <GlobalStyleDark />}

      <AppContainer />
    </>
  );
};

export default App;
