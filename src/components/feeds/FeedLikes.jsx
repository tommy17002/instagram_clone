import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReusableHeader from "../reuseables/ReusableHeader.component";
import ReusableStoryAvatar from "../reuseables/ReusableStoryAvatar";
import PropTypes from 'prop-types';

const LeftSideComponent = (props) => {
  const { friendLikes, totalLikes } = props.item.feed;

  return (
    <View style={styles.container}>
      {friendLikes.map((friendLike, index) => (
        <ReusableStoryAvatar
          key={friendLike.name + index}
          size={16}
          imageUrl={friendLike.imageUrl}
          hasActiveStory={false}
        />
      ))}
      <Text style={styles.text}>
        Liked by
        <Text style={styles.boldText}>
          {" "} {friendLikes[0].name}{" "}
          <Text style={styles.normalText}>
            and{" "}
            <Text style={styles.boldText}>{totalLikes - 1} others</Text>
          </Text>
        </Text>
      </Text>
    </View>
  );
};

LeftSideComponent.propTypes = {
  item: PropTypes.shape({
    feed: PropTypes.shape({
      friendLikes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      })).isRequired,
      totalLikes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

const FeedLikes = (props) => {
  return (
    <ReusableHeader
      backgroundColor={"lightgreen"}
      leftSideComponent={<LeftSideComponent {...props} />}
      rightSideComponent={null}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: '300',
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {
    fontWeight: '300',
  },
});

export default FeedLikes;
