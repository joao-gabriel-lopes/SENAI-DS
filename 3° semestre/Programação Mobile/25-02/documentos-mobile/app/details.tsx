import { useLocalSearchParams } from "expo-router";
import {View, Text } from "react-native";

export default function details(){
    const { id, nome } = useLocalSearchParams();
    const idStr = id?.toString();

    if (id){
        var texto = `Página details com id ${id} e nome ${nome}`
    } else {
        var texto = "Página details sem id"
    }

    return(
        <View>
            <Text>  
                {texto}
            </Text>
        </View>
    );
}