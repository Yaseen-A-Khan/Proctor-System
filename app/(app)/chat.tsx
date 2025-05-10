import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Message {
  id: string;
  text: string;
  sender: 'teacher' | 'student';
  timestamp: Date;
}

const mockMessages: Message[] = [
  { id: '1', text: 'Hello! How are you doing with the assignment?', sender: 'teacher', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
  { id: '2', text: 'Hi! I am doing well, just had a quick question about question 3.', sender: 'student', timestamp: new Date(Date.now() - 1000 * 60 * 4) },
  { id: '3', text: 'Sure, what is your question?', sender: 'teacher', timestamp: new Date(Date.now() - 1000 * 60 * 3) },
  { id: '4', text: 'For question 3, are we supposed to include diagrams?', sender: 'student', timestamp: new Date(Date.now() - 1000 * 60 * 2) },
  { id: '5', text: 'Yes, diagrams would be helpful to illustrate your points.', sender: 'teacher', timestamp: new Date(Date.now() - 1000 * 60 * 1) },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim().length === 0) {
      return;
    }
    const newMessage: Message = {
      id: String(messages.length + 1),
      text: inputText.trim(),
      sender: 'student', // Assuming the current user is the student
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageBubble,
      item.sender === 'student' ? styles.studentBubble : styles.teacherBubble
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestampText}>{item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Proctor</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
  },
  studentBubble: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  teacherBubble: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestampText: {
    fontSize: 10,
    color: '#777',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;