import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  
  containerCard: {    
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: 30
  },
  card: {
    backgroundColor: "#cfcfcf",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  imgCard: {
    width: 200,
    height: 200,
    borderRadius: 200
  },
  conteudoCard: {    
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: 20
  },
  tituloCard: {
    fontSize: 28,
    textAlign: "center"
  },
  textoCard:{
    fontSize: 17,
    textAlign: "center"
  },
  titulo: {    
    fontSize: 45
  },
  scroll: {
    paddingVertical: 30,
    backgroundColor: '#eeeeee',
  }
});

export default styles;