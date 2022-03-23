import styled from "styled-components";
import { animated } from "react-spring";

// Styled comps
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  height: 100%;
`;

const View = styled.div`
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 788px) {
    flex-wrap: wrap;
  }
`;

const Front = styled(animated.div)`
  margin: 16px;
  background-size: cover;
  background-color: #ea916b;
  position: absolute;
  height: 435px;
  width: 780px;
  will-change: transform, opacity, display;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (max-width: 788px) {
    display: inline-flex;
    width: unset;
    height: unset;
  }
`;

const Back = styled(animated.div)`
  margin: 16px;
  background-size: cover;
  background-color: #ea916b;
  position: absolute;
  height: 435px;
  width: 780px;
  will-change: transform, opacity, display;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (max-width: 788px) {
    display: inline-flex;
    width: unset;
    height: unset;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin: 6px;
  padding: 13px;
  height: 40px;
  border-radius: 10px;
  border: none;
  width: 160px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: WHITE;
  background: #373735;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin: 0px 0 16px 0px;
  margin-right: ${(props) => (props.right ? "16px" : "0")};
  padding: 20px;
  height: 46px;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 13px;
  background: WHITE;
  @media (max-width: 788px) {
    margin-right: 0;
  }
`;

const InputArea = styled.textarea`
  margin: 0px 0 16px 0px;
  padding: 20px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 13px;
  background: WHITE;
  resize: none;
`;

export {
  Container,
  Column,
  Front,
  Back,
  Button,
  Form,
  TextContainer,
  View,
  Input,
  InputArea,
};
