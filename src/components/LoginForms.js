import React from "react";
import {TextInput,Button,Text,View} from "react-native"

export default function LoginForm(){
    return(
        <View>

            <Text>................................</Text>
            <Text>LoginForm</Text>
            <Text>................................</Text>
            <TextInput placeholder="Email" />
            <Text>................................</Text>
            <TextInput placeholder="Contrasena"/>
            <Text>................................</Text>
            <Text>................................</Text>
            <Button title="Enviar" onPress={() => console.log("Enviado")}/>
            


            </View>
        
        
        )
        



}