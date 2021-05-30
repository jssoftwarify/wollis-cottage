import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
`;
export const Header = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  color: white;
  @media all and (max-width: 1000px) {
    position: relative;
  }
`;

export const LogoBorder = styled.hr`
  border-top: 2px solid white;
  margin: 0px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const LogoBottom = styled.p`
  position: relative;
  letter-spacing: 2px;
  font-size: 25px;
  top: 15px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const LogoTop = styled.p`
  position: relative;
  letter-spacing: 2px;

  font-size: 80px;
  margin: 0px;
  top: 15px;
  @media (max-width: 1200px) {
    line-height: 75px;
  }
`;
