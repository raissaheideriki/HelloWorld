import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.titulo}>olá mundo </Text>
      <Text> Meu nome é Raissa e esse é meu primeiro APP em react </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'start',
  },
  titulo: {
  backgroundColor: '#ff69B4',
    padding: 10,
    borderRadius: 5
  
  }
});
