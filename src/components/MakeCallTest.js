import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { makeCall } from './../actions/pjsip';

class MakeCallTest extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({ input: text })}
          value={this.state.input}
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={'extension'}
        />
        <Button
          title="Make Call"
          onPress={() => this.props.onMakeCall(this.state.input, this.props.account)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  account: state.pjsip.accounts[Object.keys(state.pjsip.accounts)[0]],
});

const mapDispatchToProps = dispatch => ({
  onMakeCall: (ext, account) => dispatch(makeCall(ext, account)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MakeCallTest);
