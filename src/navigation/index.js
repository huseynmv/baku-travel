import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MuseumStack from './stack/MuseumStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoriteStack from './stack/FavoriteStack';
import DeviceStack from './stack/DeviceStack';
import LottieStack from './stack/LottieStack';

const Tab = createBottomTabNavigator();

const Index = () => {


    return (<>

        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name='Museum'
                component={MuseumStack}
                options={{

                    tabBarLabel: 'Museum',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alien-outline" color={color} size={26} />
                    ),
                }}

            />

            <Tab.Screen
                name='Favorites'
                component={FavoriteStack}
                options={{

                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alien-outline" color={color} size={26} />
                    ),
                }}

            />

            <Tab.Screen
                name='Device'
                component={DeviceStack}
                options={{

                    tabBarLabel: 'Device',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alien-outline" color={color} size={26} />
                    ),
                }}

            />

            <Tab.Screen
                name='Lottie'
                component={LottieStack}
                options={{

                    tabBarLabel: 'Lottie',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alien-outline" color={color} size={26} />
                    ),
                }}

            />


        </Tab.Navigator>

    </>
    )
}

export default Index