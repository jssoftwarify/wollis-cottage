import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  justify-content: space-around;
  font-size: 1.7rem;
  background-color: black;
  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const ListElement = styled.li`
  margin: 25px 0 25px 0;
  color: white;
  border-bottom: 1px solid transparent;
  :hover {
    border-bottom: 1px solid white;
    transition: border-bottom 1s;
  }
`;

export const LogoElement = styled.li`
  margin: 12px;
  color: white;
  font-size: 1.5rem;
  @media (max-width: 1200px) {
    display: none;
  }
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
export const HamburgerContainer = styled.div`
  display: none;
  margin: 7px;
  @media all and (max-width: 1200px) {
    display: block;
  }
`;
/*border-bottom: 1px solid white;   color: #696969;*/
