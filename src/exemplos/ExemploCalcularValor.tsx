import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function ExemploCalcularValor() {
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  function calcularValor() {
    return preco * quantidade;
  }

  return (
    <View>
      <Text>Preço: {preco}</Text>
      <Text>Quantidade: {quantidade}</Text>
      <Text>Valor Total: {calcularValor()}</Text>
    </View>
  );
}