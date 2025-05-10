import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen () {
    const auth = useAuth();
    const router = useRouter();
    if (!auth) {
        return null;
    }
    const { signOut } = auth
    // Dummy data - replace with actual user data
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatarUrl: 'https://via.placeholder.com/150', // Replace with actual avatar URL
        bio: 'React Native Developer passionate about creating amazing mobile experiences.',
    };

    const handleEditProfile = () => {
        // Navigate to edit profile screen or open a modal
        console.log('Edit Profile Tapped');
    };

    const handleLogout = () => {
        // Perform logout action
        signOut();
        router.replace('/(auth)/login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <View style={styles.header}>
                    <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>

                <View style={styles.bioContainer}>
                    <Text style={styles.bioHeader}>USN</Text>
                    <Text style={styles.bioText}>1DS22CS021</Text>
                    <Text style={styles.bioHeader}>Branch</Text>
                    <Text style={styles.bioText}>CSE</Text>
                    <Text style={styles.bioHeader}>Semester</Text>
                    <Text style={styles.bioText}>6</Text>
                    <Text style={styles.bioHeader}>Division</Text>
                    <Text style={styles.bioText}>A</Text>
                </View>

                <View style={styles.bioContainer}>
                    <Text style={styles.bioHeader}>Proctor</Text>
                    <Text style={styles.bioText}>Teacher1</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
                    <Text style={[styles.buttonText, styles.logoutButtonText]}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContentContainer: {
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 20, // Added padding at the bottom for better scroll experience
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#ddd',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    bioContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    bioHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    bioText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 4
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
    },
    logoutButtonText: {
        color: '#fff',
    },
});
