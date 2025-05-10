import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

interface Document {
  id: string;
  name: string;
  uri?: string; // For locally picked files, URI might be available
  // Add other relevant document properties like type, size, uploadDate, etc.
}

const MOCK_DOCUMENTS: Document[] = [
  { id: '1', name: 'ScoreBoard_Sem5.pdf' },
  { id: '2', name: 'Sem5Results.pdf' },
  { id: '3', name: 'IntershipOffer.pdf' },
];

export default function DocumentsScreen() {
  const [documents, setDocuments] = useState<Document[]>(MOCK_DOCUMENTS);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const handleUploadDocument = async () => {
    // In a real app, you would use a document picker here
    // try {
    //   const pickerResult = await DocumentPicker.pickSingle({
    //     type: [DocumentPicker.types.allFiles],
    //   });
    //   const newDocument: Document = {
    //     id: String(Date.now()), // Simple ID generation
    //     name: pickerResult.name || 'Unnamed Document',
    //     uri: pickerResult.uri,
    //   };
    //   setDocuments((prevDocs) => [...prevDocs, newDocument]);
    //   Alert.alert('Success', `${newDocument.name} selected.`);
    //   // Here you would typically start the upload process to your backend
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     console.log('User cancelled the picker');
    //   } else {
    //     console.error('Error picking document:', err);
    //     Alert.alert('Error', 'Could not select document.');
    //   }
    // }
    Alert.alert(
      'Upload Mock',
      'This is where document selection would happen. Adding a mock document.',
    );
    const newMockDocument: Document = {
      id: String(Date.now()),
      name: `New_Document_${Date.now()}.pdf`,
    };
    setDocuments((prevDocs) => [...prevDocs, newMockDocument]);
  };

  const handleViewDocument = (doc: Document) => {
    setSelectedDocument(doc);
    // In a real app, you might navigate to a new screen or open a modal
    // to display the document content or details.
    // For web, you might use an <iframe> or a link.
    // For mobile, you might use a WebView or a dedicated document viewer library.
    Alert.alert('View Document', `Viewing: ${doc.name}`);
  };

  const renderDocumentItem = ({ item }: { item: Document }) => (
    <View style={styles.documentItem}>
      <Text style={styles.documentName}>{item.name}</Text>
      <Button title="View" onPress={() => handleViewDocument(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Documents</Text>
      <Button title="Upload New Document" onPress={handleUploadDocument} />

      <FlatList
        data={documents}
        renderItem={renderDocumentItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No documents uploaded yet.</Text>}
      />

      {selectedDocument && (
        <View style={styles.viewerContainer}>
          <Text style={styles.viewerHeader}>Document Viewer (Mock)</Text>
          <Text>Name: {selectedDocument.name}</Text>
          {/* Add more details or a mock viewer component here */}
          <Button title="Close Viewer" onPress={() => setSelectedDocument(null)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
  },
  documentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  documentName: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#666',
  },
  viewerContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  viewerHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});