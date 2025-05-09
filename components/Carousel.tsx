import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    ListRenderItemInfo,
    StyleSheet,
    View,
    ViewToken
} from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => React.ReactElement;
}

function Carousel<T>({ data, renderItem }: CarouselProps<T>) {
  const flatListRef = useRef<FlatList<T>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onViewRef = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index!);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={renderItem}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

export default Carousel;
