import SignUp from '../Components/SignUp';
import Home from '../Components/Home';

const Navigator = createNativeStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SignUpForm: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(Navigator);
