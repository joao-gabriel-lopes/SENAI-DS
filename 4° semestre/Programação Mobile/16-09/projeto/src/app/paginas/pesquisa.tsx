import { Button, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import styles from ".././style";
import React, { useState } from "react";

export default function Index() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <Text>Frango frito</Text>
                <Text>Tilápia empanada</Text>
                <Text>Pomada capilar</Text>

                <Button title="Cancelar" onPress={() => router.back()}/>

            </View>
        </SafeAreaProvider>
    );
}