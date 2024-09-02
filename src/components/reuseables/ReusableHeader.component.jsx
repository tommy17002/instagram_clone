import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ReusableHeader = (props) => {
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: props.backgroundColor || "yellow",
          paddingVertical: props.paddingVertical || 0,
        },
      ]}
    >
      <View style={styles.sideContainer}>
        {props.leftSideComponent}
      </View>
      <View style={styles.sideContainer}>
        {props.rightSideComponent}
      </View>
    </View>
  );
};

ReusableHeader.propTypes = {
  backgroundColor: PropTypes.string,
  paddingVertical: PropTypes.number,
  leftSideComponent: PropTypes.element,
  rightSideComponent: PropTypes.element,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  sideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default ReusableHeader;
