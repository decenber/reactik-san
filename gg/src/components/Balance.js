import React from "react";
import { View, Text, Image, } from "react-native";
import { styles } from "../../constants";


const Balance = () => {

    const card = { balance: 1337}

    return(
       <View>    
            <View style={{
                backgroundColor: 'white', 
                borderRadius: 10, 
                ...styles.boxShadow, 
                flexDirection: 'row'}}>
                <Image
                    source={require('../images/gglogo.png')}
                    style={{ width: 30, height: 30, borderRadius: 50,margin: 10}}/>
                <View style={{ flexDirection: 'column'}}>
                    <Text style={{ color: 'black', fontSize: 16, marginTop: 6, marginLeft: 10, fontWeight: '700' }}>{card.balance} $</Text>
                    <Text style={{ color: 'gray', fontSize: 12, marginLeft: 10, }}>Остаток средств на счете Golden Green</Text>
                </View>
            </View>
                
            
        </View>
    )
}

export default Balance