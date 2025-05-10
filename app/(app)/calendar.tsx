import React from 'react';
import { Image, ScrollView } from 'react-native';


export default function Calendar() {
  return (
    <>
        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('@/assets/images/cal1.jpeg')}
              style={{ width: 400, height: 600 }}
              onError={(error) => {
                console.log('Error loading image:', error.nativeEvent.error);
              }}
            />
            <Image
              source={require('@/assets/images/cal2.jpeg')}
              style={{ width: 400, height: 600 }}
              onError={(error) => {
                console.log('Error loading image:', error.nativeEvent.error);
              }}
            />
        </ScrollView>
    </>
  );
}