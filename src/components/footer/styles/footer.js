import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
  list-style: none;
  justify-content: space-around;
  font-size: 1.7rem;
  background-color: black;
  @media (max-width: 1200px) {
    text-align: center;
  }
  flex-grow: 1;
  margin: 0px;
`;
export const LogoElement = styled.li`
  color: white;
  font-size: 1.5rem;
`;
export const LogoBorder = styled.hr`
  border-top: 1px solid white;
  margin: 0px;
`;
export const LogoBottom = styled.span`
  letter-spacing: 4.4px;
`;
export const LogoTop = styled.span`
  letter-spacing: 1.5px;
`;
