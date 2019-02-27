import React, { Component } from 'react';
import { View , Text,Button } from 'react-native';


class About extends Component {

   
    static navigationOptions = {
        title: 'About',
        headerStyle: {
          backgroundColor: 'purple',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      

    constructor(props) {
        super(props);
        this.state={}
    }

    render(){

        return(
            
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    About page...
                </Text>
                <Button
                title="About again"
                onPress={()=>this.props.navigation.navigate('Contact')}
                />

            <Text>{ this.props.navigation.getParam('name')}</Text>
            </View>
        )
    }
}

export default About;