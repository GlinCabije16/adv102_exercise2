import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HTMLView from 'react-native-htmlview';

export default function Exercises() {

    const exercises = [
        {
            title: 'Exercise 3',
            description: `
            <ul><Strong>Create a Login Screen</Strong></ul>
            <ul>Login Screen</ul>
                <ul>
                    <li>Email (Text Input)</li>
                    <li>Password (Text Input)</li>
                    <li>Login (Button)</li>
                </ul>
                
            `,
            href: '/login'
        },
        {
            title: 'Exercise 4',
            description: `
            <ul>Create a Register Screen</ul>
                <ul>
                    <li>Email (Text Input)</li>
                    <li>Password (Text Input)</li>
                    <li>Login (Button)</li>
                </ul>
        
            `,
            href: '/login'
        },
        { title: 'Exercise 5', description: 'Desc', href: '/' },
        { title: 'Exercise 6', description: 'Desc', href: '/' },
        { title: 'Exercise 7', description: 'Desc', href: '/' },
        { title: 'Exercise 8', description: 'Desc', href: '/' },
    ];
    

    return (
        <ScrollView style={{ padding: 20 }}>
            <View style={{ rowGap: 10 }}>
                {exercises.map((exercise, index) => {
                    return (
                        <Link 
                            key={index}
                            href={exercise.href}>
                            <View 
                                style={styles.container}>
                                <Text>{exercise.title}</Text>
                                <HTMLView
                                    value={exercise.description}
                                />
                            </View>
                        </Link>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        width: '100%',
        color: 'black'
    }
})