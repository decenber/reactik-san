import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { styles, colors } from "../../constants";

const QuickTransfer = () => {

    return(
        <View style={{paddingBottom: 20, ...styles.flexDefault}}>
            <TouchableHighlight
            underlayColor={'gray'}
            style={{
                height: 50,
                width: '45%',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: colors.ACCENT,
                alignItems: 'center',
            }}
            onPress={() => alert('-6500')}>
                <Text style={{color: 'white', fontSize: 20}}>Отправить</Text>
            </TouchableHighlight>
            <TouchableHighlight
            underlayColor={'gray'}
            style={{
                height: 50,
                width: '45%',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: colors.ACCENT,
                alignItems: 'center',
            }}
            onPress={() => alert('+6500')}>
                <Text style={{color: 'white', fontSize: 20}}>Запросить</Text>
            </TouchableHighlight>
        </View>
    )
}

export default QuickTransfer