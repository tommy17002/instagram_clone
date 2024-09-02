// src/components/comments/CommentsPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const CommentsPage = ({ route }) => {
  const { postId } = route.params; // Mengambil ID post dari parameter navigasi
  const [comments, setComments] = useState([]); // State untuk menyimpan komentar
  const [newComment, setNewComment] = useState(''); // State untuk komentar baru

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <Button title="Submit" onPress={addComment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  comment: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default CommentsPage;
