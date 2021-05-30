import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  height: 100%;
  width: 100%;
  @media (max-width: 1200px) {
    height: 100%;
  }
`;
export const Header = styled.h1`
  position: relative;
  left: 50%;
  text-align: center;
  transform: translate(-50%, 30%);
  font-size: 80px;
`;
