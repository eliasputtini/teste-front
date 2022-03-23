import styled from "styled-components";

const View = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom: 2px solid #707070;
  margin-bottom: 14px;
  position: relative;
`;

const Line = styled.div`
  bottom: -4px;
  background: rgb(234, 145, 107);
  background: linear-gradient(
    180deg,
    rgba(234, 145, 107, 1) 0%,
    rgba(224, 90, 77, 1) 100%
  );
  width: 20px;
  height: 6px;
  position: absolute;
`;

const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
`;

export { View, Text, Line };
