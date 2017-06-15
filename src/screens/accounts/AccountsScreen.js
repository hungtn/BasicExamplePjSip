import React from 'react';
import { View, Text, Button } from 'react-native';
import * as fromRoutes from './../../constants/routes';

class AccountsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Accounts',
      headerRight: (
        <Button
          title="+"
          onPress={() => navigation.navigate(fromRoutes.ACCOUNT)}
        />
    ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate(fromRoutes.ACCOUNT)}
          title="New Account"
        />
      </View>
    );
  }
}

export default AccountsScreen;
