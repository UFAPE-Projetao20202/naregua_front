import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';

const Agendamento = ({ route, navigation }) => {
  const [data, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [quantSemanas, setSemanas] = useState('');
  const [quantQuinzenas, setQuinzenas] = useState('');
  const [quantMeses, setMeses] = useState('');

  const [visible, setVisible] = React.useState(false);
  const [visibleSemana, setVisibleSemana] = React.useState(false);
  const [visibleQuinzena, setVisibleQuinzena] = React.useState(false);
  const [visibleMes, setVisibleMes] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showDialogSemana = () => {setVisible(false); setVisibleSemana(true)};
  const hideDialogSemana = () => setVisibleSemana(false);

  const showDialogQuinzena = () =>  {setVisible(false); setVisibleQuinzena(true)};
  const hideDialogQuinzena = () => setVisibleQuinzena(false);

  const showDialogMes = () =>  {setVisible(false); setVisibleMes(true)};
  const hideDialogMes = () => setVisibleMes(false);

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
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={hideDialog}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TouchableOpacity onPress={() => showDialogSemana()} style={styles.dialogOption}>
                <Text style={styles.itemText}>Semanalmente</Text>
              </TouchableOpacity>
              <Divider style={styles.divider}></Divider>
              <TouchableOpacity onPress={() => showDialogQuinzena()} style={styles.dialogOption}>
                <Text style={styles.itemText}>Quinzenalmente</Text>
              </TouchableOpacity>
              <Divider style={styles.divider}></Divider>
              <TouchableOpacity onPress={() => showDialogMes()} style={styles.dialogOption}>
                <Text style={styles.itemText}>Mensalmente</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={hideDialog} style={styles.dialogBtn}>
              <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-fechar">FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={visibleSemana} onRequestClose={hideDialogSemana}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.itemText}>Por quantas semanas?</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Digite um número"
                  placeholderTextColor="grey"
                  onChangeText={(quantSemanas) => setSemanas(quantSemanas)}
                />
              </View>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={hideDialogSemana} style={styles.dialogBtn}>
              <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-fechar">FECHAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ''} style={styles.dialogBtn}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={visibleQuinzena} onRequestClose={hideDialogQuinzena}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.itemText}>Por quantas quinzenas?</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Digite um número"
                  placeholderTextColor="grey"
                  onChangeText={(quantQuinzenas) => setQuinzenas(quantQuinzenas)}
                />
              </View>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={hideDialogQuinzena} style={styles.dialogBtn}>
              <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-fechar">FECHAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ''} style={styles.dialogBtn}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={visibleMes} onRequestClose={hideDialogMes}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.itemText}>Por quantos meses?</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Digite um número"
                  placeholderTextColor="grey"
                  onChangeText={(quantMeses) => setMeses(quantMeses)}
                />
              </View>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={hideDialogMes} style={styles.dialogBtn}>
              <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-fechar">FECHAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ''} style={styles.dialogBtn}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    <View style={styles.footer}> 
      <Divider style={styles.divider}></Divider>
      <View style={styles.row}>
        <View style={styles.containerBotao}>
          <TouchableOpacity onPress={() => {Agendar(); navigation.navigate('AgendamentoConcluido')}} style={styles.continuarBtn}>
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
    width: 110,
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004A5A',
    marginTop: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    width: '70%'
  },
  dialogOption: {
    marginVertical: 7
  },
  inputView: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    height: 45,
    marginVertical: 10
  },
  textInput: {
      height: 50,
      flex: 1,
      marginLeft: 20,
      color: 'black'
  }
});

export default Agendamento;