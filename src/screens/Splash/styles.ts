import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  progressBar: {
    width: '80%',
    height: 12,
    backgroundColor: '#444',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'cyan',
  },
  percent: {
    color: 'black',
    marginTop: 8,
    fontSize: 14,
  },
});

export default styles;
