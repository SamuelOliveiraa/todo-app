import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-white);
  h2 {
    font-size: 2rem;
  }
  svg {
    cursor: pointer;
    font-size: 1.3rem;
    transition: all 0.2s;
  }
`;
