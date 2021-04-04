import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';
import g from '../Global';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#fff',
                elevation: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
                paddingVertical: 10,
                width: '100%'
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        width: 40, height: 40,
                        backgroundColor: g.gray,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon name='keyboard-backspace'
                            type='MaterialCommunityIcons'
                            style={{ fontSize: 22, }}
                        />
                    </View>
                    <Text style={{ fontFamily: 'FontAwesome5_Solid', fontSize: 18, }}>  {this.props.title }</Text>
                </View>

                <View>
                    <Image
                        style={{
                            width: 50, height: 50,
                            borderRadius: 25,
                        }}
                        source={require('../Images/woman.png')}
                    />
                    <View style={{
                        backgroundColor: '#40e340',
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        borderWidth: 2,
                        borderColor: '#fff',
                        marginLeft: "auto",
                        marginTop: -10
                    }} />
                </View>
            </View>
        );
    }
}

export default Header;
