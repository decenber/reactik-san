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
        <View style={{marginVertical: 40, position: 'relative',}}>
            {
                card.map(card => (
                    <View key={card.id} style={{
                        backgroundColor: 'white', 
                        borderRadius: 20, 
                        padding: 20, 
                        ...styles.boxShadow, }}>
                        <Image
                            source={require('../images/chip.png')}
                            style={{ width: 32, height: 32, }}/>
                        <Text style={{ color: 'black', fontSize: 22, marginVertical: 15,}}>{card.number}</Text>
                        <View style={{...styles.flexDefault, }}>
                            <View>
                                <Text style={{ color: 'black', textTransform: 'uppercase', fontSize: 10, marginBottom: 6,}}>Card owner</Text>
                                <Text style={{ color: 'black', fontSize: 16,}}>{user.name}</Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../images/Visa.png')}
                                    style={{ width:63, height: 35, }}/>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default Buttons