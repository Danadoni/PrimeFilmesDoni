
import 'react-native-gesture-handler';
import Routes from './src/Routes'
import { NavigationContainer } from '@react-navigation/native';

// adicionar  a linha plugins: ['react-native-reanimated/plugin'], dentro do babel.config.js

export default function App() {
  return (
    
    <NavigationContainer>
      {/* esconder status bar  */}
      
      <Routes/>
    </NavigationContainer>
  );
}


