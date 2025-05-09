import { Image } from 'expo-image';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Carousel from '@/components/Carousel';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  const imageUrls = [
    'assets/images/favicon.png',
    'assets/images/react-logo.png',
    'assets/images/splash-icon.png',
  ];

  return (
    <>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Carousel Section */}
      <SafeAreaView style={{ flex: 1 }}>
      <Carousel
        data={imageUrls}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
    </SafeAreaView>

      {/* Grid Options Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Explore Options
        </ThemedText>
        <ThemedView style={styles.gridContainer}>
          {/* Replace with your actual grid items and data */}
          {[].map((optionText, index) => (
            <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => console.log(`${optionText} pressed`)}
            >
          {/* Consider adding an Icon component here */}
          <ThemedText style={styles.gridItemText}>{optionText}</ThemedText>
        </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>
      </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: { // This style is defined but not used in the provided JSX. Keeping it for completeness.
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  carouselContainer: {
    height: 200, // Adjust height as needed
  },
  carouselItem: {
    width: Platform.OS === 'web' ? 300 : '100%', // Adjust width as needed, web might need explicit width
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Platform.OS === 'web' ? 10 : 0, // Add spacing between items on web
    borderRadius: 8,
    overflow: 'hidden', // Ensures image respects border radius
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  carouselCaptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for caption
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  carouselCaptionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Distributes items evenly
    marginTop: 16,
  },
  gridItem: {
    width: '45%', // Adjust for desired number of columns (e.g., 30% for 3 columns)
    aspectRatio: 1.5, // Maintain aspect ratio for items
    backgroundColor: 'gray', // Example background color
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // Add shadow for depth (optional)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  gridItemText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
