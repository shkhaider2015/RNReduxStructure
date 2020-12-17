import React from 'react';
import { View, Text, Button } from "react-native";
import { connect } from 'react-redux';
import { fetchProducts } from "../Actions/product";


class Input extends React.Component {

    handlePress = ()=>
    {
        this.props.dispatch({
            type : "INCREMENT"
        })

    }
    decrement = () =>
    {
        this.props.dispatch({
            type : "DECREMENT"
        })

    }

    multiply = () =>
    {
        this.props.dispatch({
            type : "MULTIPLY"
        })
    }
    devide = () =>
    {
        this.props.dispatch({
            type : "DEVIDE"
        })
    }

    fetchAPI = () =>
    {
        this.props.dispatch(fetchProducts())
    }

  
    
    render() {
        console.log(this.props)
        return (
            <View style={{ marginTop : 20 }} >
                <Button onPress={ () => this.handlePress() } title="Increment" style={{ }} />
                <Button onPress={ () => this.decrement() } title="Decrement" style={{ marginTop : 10 }} />
                <Button onPress={ () => this.multiply() } title="Multiply" style={{ marginTop : 10 }} />
                <Button onPress={ () => this.devide() } title="Devide" style={{ marginTop : 10 }} />
                <Button onPress={ () => this.fetchAPI() } title="Fetc data" style={{ marginTop : 10 }} />
            </View>
        );
    }
}

export default connect(null)(Input);