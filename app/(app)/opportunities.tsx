import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface DataItem {
id: string;
title: string;
content: string;
}

const DATA: DataItem[] = [
{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    content: 'This is the content of the first item.',
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    content: 'This is the content of the second item.',
},
{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    content: 'This is the content of the third item.',
},
{
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
    content: 'This is the content of the fourth item.',
},
{
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
    content: 'This is the content of the fifth item.',
},
];

interface CardProps {
title: string;
content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => (
<View style={styles.card}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='briefcase' size={24} color='black' />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    </View>
</View>
);

export default function OpportunitiesScreen () {
const renderItem = ({ item }: { item: DataItem }) => (
    <Card title={item.title} content={item.content} />
);

return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContentContainer}
        />
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0f0f0',
},
listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
},
card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
},
content: {
    fontSize: 14,
    color: '#333',
},
});

