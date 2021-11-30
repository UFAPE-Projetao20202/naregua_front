import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Dialog, RadioButton } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';

const Agendamento = ({ route, navigation }) => {
  const [data, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const servico = route.params.servico;
  let horario = {inicio: '', fim: ''};
  let horarios = [];

  function setHorario(val) {
    let a = JSON.parse(val);
    horario.inicio = a.inicio;
    horario.fim = a.fim;
  }

  function getHorarios(data) {
    horarios = [
      {inicio: '09:00', fim: '10:00'},
      {inicio: '10:00', fim: '11:00'},
      {inicio: '11:00', fim: '12:00'}
    ]
  }

  function Agendar() {
    console.log('add');
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setDate(currentDate);
    setShow(false);
  };

  const showA = () => {
    setShow(true);
  };

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon style={styles.backButton} name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>NOME DO PRESTADOR</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.itemText}>{servico.name}</Text>
        <Text style={styles.itemDescription}>R$ {servico.value}</Text>
      </View>
      <Divider style={styles.divider}></Divider>
      <View style={styles.row}>
        <Text style={styles.itemText}>Data</Text>
        <TouchableOpacity onPress={showA} style={styles.dataBtn}>
          <View style={styles.rowBtn}>
            <Text style={styles.itemText} accessible={true} accessibilityLabel="botao-agendar-periodicamente">{data.toLocaleDateString("pt-BR")}</Text>
            <Icon name="calendar" type="FontAwesome" size={16} color="black" onPress={() => {}} />
          </View>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={data}
          mode='date'
          display="default"
          onChange={onChange}
        />
      )}
      {getHorarios(data)}
      <RadioButton.Group
        style={ horarios.length > 0 ? styles.horarios : styles.hide }
        onValueChange={value => setHorario( value )}
        value={JSON.stringify(horario)}
      >
        {horarios.map((hor) => (
          <View key={JSON.stringify(hor)} style={styles.radioButton}>
            <RadioButton
              value={JSON.stringify(hor)} color="#004A5A"
            />
            <View style={styles.label}>
              <Text style={styles.labelText}>{hor.inicio}h - {hor.fim}h</Text>
            </View>
          </View>
        ))}
      </RadioButton.Group>
      <TouchableOpacity onPress={() => showDialog()} style={styles.periodicoBtn}>
        <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-agendar-periodicamente" >AGENDAR PERIODICAMENTE</Text>
      </TouchableOpacity>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Escolha a Frequência</Dialog.Title>
        <Dialog.Content>
          <Text style={styles.itemText}>shcdjksamksksdm</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity onPress={hideDialog} style={styles.dialogBtn}>
            <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-fechar">FECHAR</Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </View>
    <View style={styles.footer}> 
      <Divider style={styles.divider}></Divider>
      <View style={styles.row}>
        <View style={styles.containerBotao}>
          <TouchableOpacity onPress={() => Agendar()} style={styles.continuarBtn}>
            <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-continuar">CONTINUAR</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  backButton: {
    textAlign: 'left',
    marginVertical: 14,
    width: "10%"
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
  itemDescription: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'grey',
  },
  divider: {
    marginVertical: 5
  },
  dataBtn: {
    width: '40%',
    borderRadius: 15,
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    height: '100%'
  },
  containerBotao: {
    width: '80%',
    flex: 1,
    marginTop: 20,
    alignItems: 'flex-end'
  },
  continuarBtn: {
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
  radioButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10
	},
  label: {
    marginTop: 5,
    width: '90%'
  },
  labelText: {
  color: 'black',
  textAlign: 'left'
  },
  hide: {
		display: 'none'
	},
  horarios: {
    width: '100%'
  },
  periodicoBtn: {
    width: '60%',
    borderRadius: 15,
    height: 40,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  dialogBtn: {
    width: '40%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004A5A'
  },
});

export default Agendamento;