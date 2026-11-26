import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Exercicio4_4() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<'inicial' | 'erro' | 'ok'>('inicial');

  const validar = () => {
    const valor = email.trim();
    if (valor === '' || !valor.includes('@')) {
      setStatus('erro');
    } else {
      setStatus('ok');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, status === 'erro' && styles.inputErro]}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {status === 'erro' && (
        <Text style={styles.mensagemErro}>Digite um e-mail válido</Text>
      )}
      {status === 'ok' && (
        <Text style={styles.mensagemOk}>E-mail aceito</Text>
      )}

      <Button title="Validar" onPress={validar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    fontSize: 16,
  },
  inputErro: {
    borderColor: 'red',
  },
  mensagemErro: {
    color: 'red',
    marginBottom: 12,
  },
  mensagemOk: {
    color: 'green',
    marginBottom: 12,
  },
});