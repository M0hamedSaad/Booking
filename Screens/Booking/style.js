import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import g from '../Global';
export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    header: {
        fontSize: 18,
        fontFamily: 'FontAwesome5_Solid',
        marginTop: 30,
        paddingHorizontal: 20,
        marginBottom: 8
        
    },
    Title: {
        fontSize: 14,
        fontFamily: 'FontAwesome5',
        fontWeight:'bold',
        paddingHorizontal: 20,
        marginBottom: 8,

    },
    paragraph: {
        fontSize: 14,
        paddingHorizontal: 20,
        color:g.darkGray

    },
    ViewCalendar: {
        backgroundColor: '#fff',
        borderRadius: 25,
       // borderBottomWidth: 3,
        borderColor: g.gray,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom:15,
        elevation: 5,
        
    }
})