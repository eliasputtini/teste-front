import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2d2d2d;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
`;

const Main = styled.div`
  justify-content: space-evenly;
  flex-direction: row;
`;
const ButtonView = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin-top: 52px;
  margin-bottom: 42px;
`;

const Button = styled.button`
  margin: 8px;
  height: 40px;
  border-radius: 10px;
  border: none;
  width: 200px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: WHITE;
  background: rgb(234, 145, 107);
  background: linear-gradient(
    180deg,
    rgba(234, 145, 107, 1) 0%,
    rgba(224, 90, 77, 1) 100%
  );
  box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 64px;
  margin-top: 100px;
`;

export { Main, View, Button, ButtonView, Logo };
