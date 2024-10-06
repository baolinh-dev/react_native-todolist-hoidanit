import { Text, View, StyleSheet} from "react-native" 
import { OPENSANS } from "../../utils/const"

const styles = StyleSheet.create({
    text: {
        fontSize: 40, 
        fontFamily: OPENSANS
    }
}
)

const DetailScreen = () => { 
    return ( 
        <View>
            <Text style={styles.text}>Có FontFamily</Text> 
            <Text style={{fontSize: 40}}>Không có FontFamily</Text>
        </View>
    )
}  

export default DetailScreen

