import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppCard = props => (
    <View style={{...styles.default, ...props.style}}>{props.children}</View>
);

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        padding: 20,
        borderWidth: 2,
        borderColor: '#B8B8B8',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        shadowColor: '#666666',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        elevation: 8
    }
});