import { Main, Button, ButtonView, View, Logo } from "./styles.js";
import React, { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import myImage from "../../assets/logo.png";

function Home() {
  const [flipped, set] = useState(false);

  return (
    <View>
      <Logo src={myImage} />
      <ButtonView>
        <Button onClick={() => set(false)}>INTRODUÇÃO</Button>
        <Button onClick={() => set(true)}>CONTATO</Button>
      </ButtonView>
      <Title text={flipped ? "Contato" : "Introdução"} />
      <Card flip={flipped} />
    </View>
  );
}

export default Home;
