import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const Servico = ({ route, navigation }) => {
  const [observacoes, setObservacoes] = useState('');
  const servico = route.params.servico;

  function adicionarServico() {
    console.log('add');
  }

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.pageTitle}>{servico.name}</Text>
      <Text style={styles.itemDescription}>{servico.description}</Text>
      <View style={styles.row}>
        <Text style={styles.itemText}>R$ {servico.value}</Text>
        <Text style={styles.itemText}>Duração Média: {servico.duration} min</Text>
      </View>
      <Divider style={styles.divider}></Divider>
      <Text style={styles.fieldText}>Alguma Observação?</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Restições de horário, detalhes do endereço..."
          placeholderTextColor="grey"
          onChangeText={(observacoes) => setObservacoes(observacoes)}
          accessible={true} accessibilityLabel="campo-observacoes"
        />
      </View>
    </View>
    <View style={styles.footer}>
      <Divider style={styles.divider}></Divider>
      <View style={styles.row}>
        <View style={styles.containerBotao}>
          <TouchableOpacity onPress={() => adicionarServico()} style={styles.addButton}>
            <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-adicionar">ADICIONAR (R$ {servico.value})</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 15
  },
  content: {
    width: '100%',
    height: '100%'
  },
  pageTitle: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 18,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  itemText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  fieldText: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  itemDescription: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'grey',
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  divider: {
    marginVertical: 5
  },
  textInput: {
    marginHorizontal: 8,
    marginVertical: 5,
    color: 'black'
  },
  inputView: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 90,
    marginHorizontal: 10,
    marginVertical: 10
  },
  containerBotao: {
    width: '80%',
    flex: 1,
    marginTop: 20,
    alignItems: 'flex-end'
  },
  addButton: {
    width: '60%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004A5A'
  },
  buttonText: {
    color: 'white'
  },
  footer: {
    position: 'absolute',
    left: 15,
    bottom: 20,
    right: 15
  }
});

export default Servico;