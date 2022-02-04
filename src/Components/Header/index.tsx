import { Container } from "./style";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

type Props = {
  theme: boolean;
  handleTheme: () => void;
};

const Header = ({ theme, handleTheme }: Props) => {
  return (
    <Container>
      <h2>TODO</h2>

      {theme === true ? (
        <BsFillMoonFill onClick={handleTheme} />
      ) : (
        <BsFillSunFill onClick={handleTheme} />
      )}
    </Container>
  );
};

export default Header;
