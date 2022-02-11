import { Container } from "./style";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { TOGGLE_THEME } from "../../Store/Theme/actions";

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>TODO</h2>

      {theme === true ? (
        <BsFillMoonFill onClick={() => dispatch(TOGGLE_THEME())} />
      ) : (
        <BsFillSunFill onClick={() => dispatch(TOGGLE_THEME())} />
      )}
    </Container>
  );
};

export default Header;
