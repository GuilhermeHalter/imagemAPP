import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default class Counter extends Component {
    state = {
        countL: 0,
        countD: 0,
        step: 1,
    };
    increment(){
        this.setState({ countL: this.state.countL + this.state.step});
    }
    decrement(){
        this.setState({ countD: this.state.countD + this.state.step});
    }
    alterarStep(texto){
        this.setState({step: parseInt(texto) || 0})
    }
    render(){
        return (
        <View>
            <View style={styles.view}>
            <Text style={styles.texts}>Like: {this.state.countL} </Text>
            <Text style={styles.texts}>Dislike: {this.state.countD} </Text>
            </View>
            <br/>
            <Button color="#85EB8F" onPress={() => this.increment()} title="Like"/>
            <Button color="#DB473F" onPress={() => this.decrement()} title="Dislike"/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    texts: {
      flex: 1,
      marginLeft: 10,
    },
    view:{
        flexDirection:'row',
      flexWrap:'wrap',
    },
});