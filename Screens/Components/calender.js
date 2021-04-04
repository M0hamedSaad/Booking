import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
//import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Icon } from 'native-base';
import moment from 'moment';
import Calendar from "react-native-calendar-range-picker";



export default class calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDays: {}

        };
    }
    componentDidMount() {
    }

    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Calendar
                    startDate="2020-05-05"
                    endDate="2020-05-12"
                    onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
                    />
                    </View>
        );
    }
}
