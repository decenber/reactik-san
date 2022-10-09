import React from "react";
import { View, Text, TouchableHighlight, Linking, Image } from "react-native";
import { useAuth } from "../useAuth";

const Header = () =>{

    const {user} = useAuth()

    return(
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <View>
                <Text style={{color: 'black', fontSize: 24, fontWeight: "bold", marginBottom: 6, }}>Hi {user?.name}</Text>
                <Text style={{color: 'gray', fontSize: 18, }}>Welcome Back</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => Linking.openURL('https://vk.com/zvuchithypovo')}>
                    <Image
                        source={{ uri: 'https://sun9-40.userapi.com/impf/c846019/v846019882/e2f91/CIOT1IofR2E.jpg?size=1280x720&quality=96&sign=40983838c048422e4fde248d55b95bc4&type=album'}}
                        style={{ width: 50, height: 50, borderRadius: 50,}}/>

                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Header