import {  StyleSheet,
    Button,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert} from 'react-native'

const SessionAction = () => {
  return (
    <SafeAreaView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonECG}
            onPress={() => Alert.alert('Left button pressed')}
            >
            <Text style={{ color: "blue"}}>ECG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonHR}
            onPress={() => Alert.alert('Right button pressed')}
            >
            <Text style={{ color: "white"}}>HR</Text>
          </TouchableOpacity>
          
        </View>   
        <View style={styles.startSessionContainer}>
            <TouchableOpacity style={styles.startSession} onPress={() => Alert.alert('Start Session')}>
              <Text> Start Session</Text>
            </TouchableOpacity>        
            <TouchableOpacity style={styles.startSession} onPress={() => Alert.alert('End Session')}>
              <Text> End Session</Text>
            </TouchableOpacity>        
        </View>
    </SafeAreaView> 
  )
}

export default SessionAction

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: "#0000FF",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        width: 250,
        height: 25,
      },
      buttonECG: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      buttonHR: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
      },
      startSessionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      startSession: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        padding: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'transparent',
        flex: 1,
        color: '#0000FF',
        marginHorizontal: 10,
      },
   
  });
  