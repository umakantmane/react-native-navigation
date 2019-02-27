import React, { Component } from 'react';
import { View , Text,Button } from 'react-native';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state={}
        this.login = this.login.bind(this);
    }

    login = () => {

        this.props.navigation.navigate('About', {name:"Manas"});
    }

    render(){

        return(
            
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    Home page...
                </Text>
                <Button
                title="About"
                onPress={this.login}
                />
            </View>
        )
    }
}

export default Home;