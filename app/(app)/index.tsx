import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Carousel from '@/components/Carousel';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

// Example Card Component (can be in a separate file)
const SimpleCard = ({ title, content }: { title: string; content: string }) => (
  <View style={styles.cardContainer}>
    <ThemedText type="subtitle" style={styles.cardTitle}>{title}</ThemedText>
    <ThemedText style={styles.cardContent}>{content}</ThemedText>
  </View>
);

export default function HomeScreen() {

  const router = useRouter();
  const handlePress = (option: string) => {
    switch (option) {
      case 'Calendar':
        router.push('/(app)/calendar');
        break;
      // case 'Announcements':
      //   router.push('/announcements');
      //   break;
      // case 'Profile':
      //   router.push('/profile');
      //   break;
      // case 'Chat':
      //   router.push('/chat');
      //   break;
      // case 'Scoreboard':
      //   router.push('/scoreboard');
      //   break;
      // case 'Performance':
      //   router.push('/performance');
      //   break;
      // case 'Opportunities':
      //   router.push('/opportunities');
      //   break;
      // case 'Documents':
      //   router.push('/documents');
      //   break;
      default:
        console.log('Unknown option pressed');
    }
  };

  // Data for the carousel, now containing JSX elements
  const carouselItems = [
    <SimpleCard key="card1" title="Card 1" content="This is the first card." />,
    <SimpleCard key="card2" title="Card 2" content="Another card with different content." />,
    
  ];

  return (
    <>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Carousel Section */}
      <SafeAreaView style={{ flex: 1}}>
      <Carousel
        data={carouselItems}
        renderItem={({ item }) => item} // Directly render the JSX element
      />
    </SafeAreaView>

      {/* Grid Options Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Explore Options
        </ThemedText>
        <ThemedView style={styles.gridContainer}>
          {/* Replace with your actual grid items and data */}
          {['Calendar', 'Announcements', 'Profile', 'Chat', 'Scoreboard', 'Performance', 'Opportunities', 'Documents'].map((optionText, index) => (
            <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => handlePress(optionText)}
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
    marginHorizontal: 'auto',
    marginTop: 5,
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
    
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
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
    padding: 10, // Added padding for better appearance
    backgroundColor: '#f0f0f0', // Example background for image card
    borderRadius: 10,
  },
  image: {
    width: '90%',
    height: 150, // Adjusted height
    borderRadius: 10,
    resizeMode: 'contain', // Changed to contain to see the whole image
  },
  imageCaption: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  // Styles for SimpleCard
  cardContainer: {
    backgroundColor: '#e0e0e0', // Example background
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10, // Add some margin if items are directly next to each other
    width: Platform.OS === 'web' ? 280 : '90%', // Ensure cards have a defined width
    alignSelf: 'center', // Center the card in the carousel item view
    minHeight: 100, // Ensure a minimum height for cards
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    color: 'black',
    fontSize: 14,
  },
});
