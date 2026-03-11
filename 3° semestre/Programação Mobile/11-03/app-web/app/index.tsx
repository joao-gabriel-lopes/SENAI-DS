import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
import styles from "./style";

export default function Index(){
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Link style={styles.link} href="/lista/page">
                <Text>Lista de carteiras</Text>
            </Link>            
            <Link style={styles.link} href="/cadastro/page">
                <Text>Cadastro de carteiras</Text>
            </Link>
        </View>
    );
}