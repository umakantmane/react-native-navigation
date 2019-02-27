import React, { Component } from 'react';
import { View , Text,Button } from 'react-native';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state={}
    }

    render(){

        return(
            
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    Contact page...
                </Text>
                <Button
                title="About again"
                onPress={()=>this.props.navigation.popToTop()}
                />
            </View>
        )
    }
}

export default Contact;