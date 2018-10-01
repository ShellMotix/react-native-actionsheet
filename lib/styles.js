import { Platform, StyleSheet } from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default {
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: '#000'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 1,
    alignSelf: Platform.OS === 'ios' ? 'flex-end' : 'center',
    marginHorizontal: 20,
    marginBottom: 20
  },
  titleBox: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: Platform.OS === 'ios' ? 0 : 10
  },
  titleText: {
    color: '#757575',
    fontSize: 14
  },
  messageBox: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    backgroundColor: '#fff',
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  messageText: {
    color: '#9a9a9a',
    fontSize: 12
  },
  buttonBox: {
    height: 50,
    marginTop: hairlineWidth,
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: Platform.OS === 'ios' ? 0 : 10
  },
  buttonText: {
    fontSize: 18
  },
  cancelButtonBox: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 10 : 0,
    height: 50,
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 10 : 1,
    paddingHorizontal: Platform.OS === 'ios' ? 0 : 10
  }
}
