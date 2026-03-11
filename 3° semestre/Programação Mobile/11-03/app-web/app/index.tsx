import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
import styles from "./style";

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo ao app de carteiras</Text>

            <Link style={styles.link} href="/lista/page">
                <Text>Lista de carteiras</Text>
            </Link>            
            <Link style={styles.link} href="/cadastro/page">
                <Text>Cadastro de carteiras</Text>
            </Link>
        </View>
    );
}