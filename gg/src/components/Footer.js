import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../../constants";

const Footer = () => {
    return(
            <View style={{...styles.flexDefault}}>
                <View style={{ width: 100, alignItems: 'center' }}>
                    <Icon name='home' size={20} color='900'/>
                    <Text style={{ fontSize: 10 }}>Главная страница</Text>
                </View>
                <View style={{ width: 100, alignItems:'center' }}>
                    <Icon name='dollar' size={20} color='900'/>
                    <Text style={{ fontSize: 10 }}>Платежи</Text>
                </View>
                <View style={{ width: 100, alignItems: 'center' }}>
                    <Icon name='credit-card' size={20} color='900'/>
                    <Text style={{ fontSize: 10 }}>Счет</Text>
                </View>
            </View>
    )
}

export default Footer