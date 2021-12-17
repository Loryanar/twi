import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const tabs = () =>{


    return(
        
<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
          
                
             );
         }
         const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 35,
            },
            inputGroup: {
              flex: 1,
              padding: 0,
              marginBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#cccccc",
            },
            loader: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            },
          });
