import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/screens/Home';
import Widgets from './src/components/screens/Widgets';
import Notification from './src/components/screens/Notification';
import Report from './src/components/screens/Report';
import HomeLight from './src/assets/images/home-light.svg';
import HomeDark from './src/assets/images/home-dark.svg';
import WidgetLight from './src/assets/images/widget-light.svg';
import WidgetDark from './src/assets/images/widget-dark.svg';
import NotificationsLight from './src/assets/images/notifications-light.svg';
import NotificationDark from './src/assets/images/notifications-dark.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();

  const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen
        name="ReportScreen"
        component={Report}
        options={({route}) => ({
          initialParams: {
            weatherDetails: route.params?.weatherDetails ?? [],
          },
        })}
      />
    </HomeStack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#07072A',
            borderTopWidth: 0,
          },
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            let iconComponent;
            if (route.name === 'Home') {
              iconComponent = focused ? <HomeLight /> : <HomeDark />;
            } else if (route.name === 'Widgets') {
              iconComponent = focused ? <WidgetLight /> : <WidgetDark />;
            } else {
              iconComponent = focused ? (
                <NotificationsLight />
              ) : (
                <NotificationDark />
              );
            }
            return iconComponent;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Widgets" component={Widgets} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
