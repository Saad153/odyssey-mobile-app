import { StyleSheet, Text, View } from 'react-native'

const RevenueCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Total Revenue</Text>
        <Text style={styles.values}>$32,500</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Total Profit</Text>
        <Text style={styles.values}>$32,500</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Total Views</Text>
        <Text style={styles.values}>$32,500</Text>
      </View>
    </View>
  )
}

export default RevenueCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        gap:10,
        marginBottom:10
    },
    subContainer:{
        flex:1,
        padding:10,
        borderWidth:2,
        borderRadius:15,
        alignItems:"center",
        backgroundColor:"#F0F8FF",
        borderColor:"#87CEFA"
    },
    heading:{
        fontSize:13,
        fontWeight:"500"
    },
    values:{
        color:"#1e90ff"
    }
})