import React, { useState } from "react";
import {
  Container,
  Front,
  Back,
  Column,
  Input,
  Button,
  Form,
  TextContainer,
  View,
  InputArea,
} from "./styles";

import { useSpring } from "react-spring";

const initialValues = {
  name: "",
  mail: "",
  message: "",
};

export default function Card({ flip }) {
  const [values, setValues] = useState(initialValues);
  const { transform, opacity } = useSpring({
    opacity: flip ? 0 : 1,
    transform: `perspective(5000px) rotateY(${flip ? 0 : 180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <View>
      <Front style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <Container>
          <Form>
            <Column>
              <Input
                required
                type="text"
                name="name"
                right
                placeholder="Nome*"
                value={values.name}
                onChange={handleChange}
              />

              <Input
                required
                type="email"
                name="mail"
                placeholder="E-mail*"
                value={values.mail}
                onChange={handleChange}
              />
            </Column>

            <InputArea
              msg
              required
              rows={10}
              type="text"
              name="message"
              placeholder="Mensagem*"
              value={values.message}
              onChange={handleChange}
            />
            <Button>ENVIAR</Button>
          </Form>
        </Container>
      </Front>
      <Back
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
          display: opacity.interpolate((o) => (o == 0 ? "none" : "initial")),
        }}
      >
        <TextContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </TextContainer>
      </Back>
    </View>
  );
}
