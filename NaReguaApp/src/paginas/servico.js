import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
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

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon style={styles.backButton} name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>{servico.name}</Text>
      </View>
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
          placeholder="Restrições de horário, detalhes do endereço..."
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
          <TouchableOpacity onPress={() => navigation.navigate('Agendamento', {servico: servico})} style={styles.addButton}>
            <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-adicionar">AGENDAR (R$ {servico.value})</Text>
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
    marginVertical: 10,
    fontSize: 18,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: '500',
    width: '90%'
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
  },
  row: {
    flexDirection: 'row'
  },
  backButton: {
    textAlign: 'left',
    marginVertical: 14,
    width: "10%"
  }
});

export default Servico;