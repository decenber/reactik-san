import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../../constants";

const Footer = () => {
    return(
            <View style={{...styles.flexDefault}}>
                <View style={{ width: 150, alignItems: 'center' }}>
                    <Icon name='home' size={30} color='900'/>
                    <Text>Главная страница</Text>
                </View>
                <View style={{ width: 150, alignItems:'center' }}>
                    <Icon name='dollar' size={30} color='900'/>
                    <Text>Платежи</Text>
                </View>
                <View style={{ width: 150, alignItems: 'center' }}>
                    <Icon name='credit-card' size={30} color='900'/>
                    <Text>Счет</Text>
                </View>
            </View>
    )
}

export default Footer