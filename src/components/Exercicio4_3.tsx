import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Exercicio4_3() {
  const [mostrarDetalhes, setMostrarDetalhes] = useState<boolean>(false);

  const produto = {
    nome: 'Notebook Gamer X15',
    descricao:
      'Notebook com processador de 8 núcleos, 16 GB de RAM, SSD de 512 GB e placa de vídeo dedicada. Ideal para jogos e trabalho pesado.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{produto.nome}</Text>

      {mostrarDetalhes && (
        <Text style={styles.descricao}>{produto.descricao}</Text>
      )}

      <Button
        title={mostrarDetalhes ? 'Ocultar detalhes' : 'Mostrar detalhes'}
        onPress={() => setMostrarDetalhes(!mostrarDetalhes)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});