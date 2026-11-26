import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
} from "react-native";

type Erros = {
  nome?: boolean;
  email?: boolean;
  senha?: boolean;
  confirmarSenha?: boolean;
};

export default function Index() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [erros, setErros] = useState<Erros>({});

  function cadastrar() {
    const novosErros: Erros = {};

    if (nome.trim() === "") novosErros.nome = true;
    if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
      novosErros.email = true;
    }
    if (senha === "") novosErros.senha = true;
    if (confirmarSenha === "") novosErros.confirmarSenha = true;

    // Algum campo vazio ou e-mail inválido
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      setSucesso(false);
      setMensagem("Erro: preencha todos os campos corretamente.");
      return;
    }

    if (senha.length < 6) {
      setErros({ senha: true });
      setSucesso(false);
      setMensagem("Erro: a senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErros({ senha: true, confirmarSenha: true });
      setSucesso(false);
      setMensagem("Erro: as senhas não são iguais.");
      return;
    }

    setErros({});
    setSucesso(true);
    setMensagem("Cadastro realizado com sucesso!");
  }

  // Ao digitar em qualquer campo, limpa todos os erros e a mensagem
  function digitar(setter: (valor: string) => void) {
    return (valor: string) => {
      setter(valor);
      setErros({});
      setMensagem("");
      setSucesso(false);
    };
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        style={[styles.campo_texto, erros.nome && styles.erro]}
        value={nome}
        onChangeText={digitar(setNome)}
      />

      <Text>E-mail</Text>
      <TextInput
        style={[styles.campo_texto, erros.email && styles.erro]}
        value={email}
        onChangeText={digitar(setEmail)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Senha</Text>
      <View style={[styles.painel_senha, erros.senha && styles.erro]}>
        <TextInput
          style={styles.campo_senha}
          value={senha}
          onChangeText={digitar(setSenha)}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.olho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>

      <Text>Confirmar senha</Text>
      <View style={[styles.painel_senha, erros.confirmarSenha && styles.erro]}>
        <TextInput
          style={styles.campo_senha}
          value={confirmarSenha}
          onChangeText={digitar(setConfirmarSenha)}
          secureTextEntry={!mostrarSenha}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.olho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>

      <View style={styles.botao}>
        <Button title="Cadastrar" onPress={cadastrar} />
      </View>

      <Text style={[styles.mensagem, sucesso ? styles.ok : styles.msgErro]}>
        {mensagem}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  campo_texto: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  painel_senha: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 10,
  },
  campo_senha: {
    flex: 1,
    padding: 8,
  },
  olho: {
    fontSize: 22,
    paddingHorizontal: 10,
  },
  botao: {
    marginVertical: 10,
  },
  mensagem: {
    textAlign: "center",
    fontSize: 16,
  },
  erro: {
    borderColor: "red",
    borderWidth: 2,
  },
  msgErro: {
    color: "red",
  },
  ok: {
    color: "green",
  },
});