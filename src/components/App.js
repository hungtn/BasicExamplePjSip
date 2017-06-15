import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TextInput, Button } from 'react-native';
import MakeCallTest from './MakeCallTest';

const fieldNames = [
  'name',
  'username',
  'password',
  'domain',
  'proxy',
  'transport',
  'regServer',
  'regExpiry',
];

const placeholders = {
  name: 'Account Name',
  username: 'Username',
  password: 'Password',
  domain: 'SIP Server Domain',
  proxy: 'Proxy Domain',
  transport: 'Connection Transport',
  regServer: 'Registration Request URI',
  regExpiry: 'Registration Interval (secs)',
};


class App extends React.Component {
  static entriesValid(state) {
    return state && (
      state.accountConfig.name.length > 0
      && state.accountConfig.username.length > 0
      && state.accountConfig.domain.length > 0
      && state.accountConfig.password.length > 0
    );
  }

  constructor(props) {
    super(props);
    const initialState = {
      entriesValid: false,
      accountConfig: {}
    };

    fieldNames.forEach((field) => {
      initialState.accountConfig[field] = '';
    });

    this.state = initialState;
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }

  handleCreateAccount() {
    this.props.onCreateAccount(this.state.accountConfig);
  }

  handleFieldChange(fieldName, value) {
    const newState = {
      ...this.state,
      accountConfig: {
        ...this.state.accountConfig,
        [fieldName]: value,
      },
    };

    const entriesValid = App.entriesValid(newState);
    newState.entriesValid = entriesValid;

    this.setState(newState);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Button
              title="Register"
              onPress={this.handleCreateAccount}
            />
          </View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('name', text)}
            value={this.state.accountConfig['name']}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={placeholders.name}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('username', text)}
            value={this.state.accountConfig['username']}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={placeholders.username}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('password', text)}
            value={this.state.accountConfig['password']}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry
            valueType={'password'}
            placeholder={placeholders.password}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('domain', text)}
            value={this.state.accountConfig['domain']}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={placeholders.domain}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('transport', text)}
            value={this.state.accountConfig['transport']}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={placeholders.transport}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('proxy', text)}
            value={this.state.accountConfig['proxy']}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={placeholders.proxy}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('regServer', text)}
            value={this.state.accountConfig['regServer']}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={placeholders.regServer}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.handleFieldChange('regExpiry', text)}
            value={this.state.accountConfig['regExpiry']}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'numeric'}
            placeholder={placeholders.regExpiry}
          />
          <MakeCallTest />
        </ScrollView>
      </View>
    );
  }
}

App.propTypes = {
  onCreateAccount: PropTypes.func.isRequired,
};

export default App;
