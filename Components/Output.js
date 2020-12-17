import React from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';

const MaptoState = state => {
    return{
        counter : state.counter.value,
        multiple : state.multiple.anotherValue,
        pp : state.products
    }
}

class Output extends React.Component {
    render() {
        console.log("Value : ", this.props)
        return (
            <View>
                {
                    this.props.pp.loading 
                    ? console.log("Loading ...", this.props.pp.loading)
                    : this.props.pp.error 
                    ? console.log("Error ...", this.props.pp.error)
                    : this.props.pp.items 
                    ? this.props.pp.items.map(
                        (obj, ind) => (<Text key={ind} > {obj['name']} </Text>)
                    )
                    : null
                }
                { console.log(this.props.pp) }
                <Text>Increment/Decrement Value : {this.props.counter} </Text>
                <Text>Multiple of 5 Value : {this.props.multiple} </Text>
            </View>
        );
    }
}

export default connect(MaptoState)(Output);