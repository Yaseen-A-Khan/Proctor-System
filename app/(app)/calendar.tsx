import React from 'react';
import { WebView } from 'react-native-webview';


export default function Calendar() {
  return (
    <>
    {/* <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Calendar</ThemedText>
    </ThemedView> */}
    <WebView
    style={{ flex: 1, width: '100%', height: '100%' }}
    source={{uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf"}}
    />
    </>
  );
}