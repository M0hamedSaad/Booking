import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import Calendar from '../Components/calender';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Timetable'} />
                <ScrollView>
                    <View>
                        <SearchBar
                            placeholder={'Where do you want to go?'} />

                        <Text style={styles.header}>Mobile Version</Text>
                        <Text style={styles.Title}>Datepicking templates</Text>
                        <Text style={styles.paragraph}>Select destenation ,time period and number of passengers.</Text>
                        
                        <View style={styles.ViewCalendar}>
                            <Calendar />
                        </View>
                        <Text>Saad and Joo</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
