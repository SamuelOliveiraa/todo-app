import styled from "styled-components";
import Check from "../../images/icon-check.svg";

export const ContainerList = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 0.2rem;
  box-shadow: 0 1px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled(ContainerList)`
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.3rem 0;
  padding: 0 1rem;
  color: var(--text-gray);

  > input[type="text"] {
    width: 92%;
    height: 3rem;
  }
  > input::placeholder {
    color: var(--text-gray);
  }
`;

export const CustomCheckmark = styled.label<{ checked?: boolean }>`
  height: 16px;
  width: 16px;
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  > input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  ${(props) =>
    props.checked &&
    `> input[type="checkbox"] ~ span{
    background: url(${Check}) no-repeat, var(--check-background);
    background-position: center;
    background-size: 7px;
    border: 0;
    opacity: 1;
  }`}

  > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--very-dark-grayish-blue);
    opacity: 0.2;
  }
`;

export const ListItem = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  color: var(--very-dark-grayish-blue); //var(--white);

  ~ div::after {
    content: "";
    width: 100%;
    height: 0.1px;
    background-color: var(--very-dark-grayish-blue);
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
  }

  > h2 {
    width: 86%;
    font-size: 1rem;
    color: var(--very-dark-grayish-blue);
    ${props => props.checked && `text-decoration: line-through;
    opacity: 0.2;`}
  }
  > img {
    width: 10px;
    cursor: pointer;
  }
`;

export const Infos = styled(ListItem)`
  font-size: 0.8rem;
  padding: 1rem;
  > div {
    width: 10px;
    opacity: 0;
    visibility: hidden;
  }
  @media screen and (min-width: 450px) {
    > div {
      width: 130px;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const InfosMobile = styled(ListItem)`
  width: 100%;
  background-color: var(--white);
  border-radius: 0.2rem;
  box-shadow: 0 1px 15px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  padding: 1rem 3.5rem;
  margin-top: 2rem;

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

export const Flex = styled(Infos)<{ filter?: string }>`
  width: 130px;
  padding: 0;

  > span {
    cursor: pointer;
  }

  ${(props) =>
    props.filter &&
    `> span:nth-child(${props.filter}){
    color: blue;
  }`}
`;
