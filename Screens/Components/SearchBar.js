import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import g from '../Global';
import { Icon } from 'native-base';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name='search'
                    type='Feather'
                    style={{fontSize:20,color:g.darkGray}}
                />

                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChange}
                    defaultValue={this.props.value}
                    underlineColorAndroid={false}
                    placeholderTextColor={g.darkGray}
                    autoCapitalize={false}
                    autoCorrect={false}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: g.gray,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        marginTop:25,
    },
    input: {
        width: '90%',
        color: g.darkGray,
        height:42
    }
})