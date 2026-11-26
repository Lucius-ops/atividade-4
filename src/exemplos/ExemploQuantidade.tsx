import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function ExemploQuantidade() {
  const [quantidade, setQuantidade] = useState(0);

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  function diminuir() {
    if (quantidade === 0) {
      return;
    }
    setQuantidade(quantidade - 1);
  }

  return (
    <View>
      <Contador quantidade={quantidade} />
      <Button title="Aumentar" onPress={aumentar} />
      <Button title="Diminuir" onPress={diminuir} />
    </View>
  );
}
type ContadorProps = {
  quantidade: number;
};
function Contador(props: ContadorProps) {
  return (
    <View>
      <Text>Quantidade: {props.quantidade}</Text>
    </View>
  );
}
