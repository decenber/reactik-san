import React from "react";
import { View, Text, Image } from "react-native";
import { useAuth } from "../useAuth";
import { styles } from "../../constants";

const card = [
    {
        id: 'rfjksdfh',
        number: '7777 7777 7777 7777',
        type: 'Visa',
        balance: 1337
    },
]

const Buttons = () => {
    const {user} = useAuth()
    return(
        <View style={{marginVertical: 60, position: 'relative', height: 250,}}>
            {
                card.map(card => (
                    <View key={card.id} style={{
                        backgroundColor: 'white', 
                        borderRadius: 20, 
                        padding: 40, 
                        ...styles.boxShadow, }}>
                        <Image
                            source={require('../images/chip.png')}
                            style={{ width: 50, height: 50,}}/>
                        <Text style={{ color: 'black', fontSize: 32, marginVertical: 30,}}>{card.number}</Text>
                        <View style={{...styles.flexDefault, }}>
                            <View>
                                <Text style={{ color: 'black', textTransform: 'uppercase', fontSize: 12, marginBottom: 6,}}>Card owner</Text>
                                <Text style={{ color: 'black', fontSize: 18,}}>{user.name}</Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../images/Visa.png')}
                                    style={{ width:86, height: 45, }}/>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default Buttons