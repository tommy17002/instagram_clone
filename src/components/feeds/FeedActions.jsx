import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import ReusableHeader from '../reuseables/ReusableHeader.component';

const LeftSideComponent = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity>
        <FontAwesome6 name="heart" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CommentsPage', { postId: 'some-post-id' })}>
        <FontAwesome6 name="comment" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome6 name="paper-plane" size={20} color="black" />
      </TouchableOpacity>
    </>
  );
};

const RightSideComponent = (props) => {
  return (
    <TouchableOpacity>
      <FontAwesome6 name="bookmark" size={20} color="black" />
    </TouchableOpacity>
  );
};

const FeedActions = ({ navigation }) => {
  return (
    <ReusableHeader
      paddingVertical={10}
      leftSideComponent={<LeftSideComponent navigation={navigation} />}
      rightSideComponent={<RightSideComponent />}
    />
  );
};

export default FeedActions;
