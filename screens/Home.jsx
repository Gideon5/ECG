import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GraphView from '../components/Tabs/GraphView';
import TableView from '../components/Tabs/TableView';
import DrawerContent from '../components/Drawer/DrawerContent'; // Import the custom DrawerContent component
import { SafeAreaView } from 'react-native';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator(); // Assign createBottomTabNavigator to Tab

const Home = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Tabs"
        component={TabNavigation}
        // options={{
        //   header: ({ navigation }) => (
        //     <Header className=""
        //       leftComponent={{
        //         icon: 'menu',
        //         color: '#fff',
        //         onPress: () => navigation.openDrawer(),
        //       }}
        //       centerComponent={{
        //         text: 'ECG App',
        //         style: { color: '#fff' , marginBottom: 10},
        //       }}
        //       rightComponent={{ icon: 'home', color: '#fff' }}
        //       containerStyle={{ backgroundColor: 'blue', marginBottom: 10, marginTop: 20, height: 150 }}
        //     />
        //   ),
        // }}
      />
    </Drawer.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="graph"
        component={GraphView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="table"
        component={TableView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="table" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;