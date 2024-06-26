import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, ThemeContext } from './theme/theme';
import Home from './screens/home';
import Settings from './screens/settings';
import MainLayout from './components/main.Layout'

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" options={{ headerShown: false }}>
                {props => (
                  <MainLayout>
                    <Home {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="MyCards" options={{ headerShown: false }}>
                {props => (
                  <MainLayout>
                    <MyCards {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Statistics" options={{ headerShown: false }}>
                {props => (
                  <MainLayout>
                    <Statistics {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Settings" options={{ headerShown: false }}>
                {props => (
                  <MainLayout>
                    <Settings {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
