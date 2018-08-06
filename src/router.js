import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';



const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar={true}>
                <Scene
                    key='Login'
                   
                    component={Login}
                    initial
                />

                {/* <Stack key='Home' hideNavBar>


                   
                    <Scene
                        key='HomePage'
                        component={Home}
                        initial
                    />

                    <Scene
                        key='About'
                        component={About}
                        
                    />

                </Stack> */}

                
                
                <Scene key='HomeTab'   
                  tabs = {true}  
                 
                 tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                >
                 <Scene
                        key='HomePage'
                        component={Home}
                        initial
                    />

                    <Scene
                        key='About'
                        component={About}
                        
                    />
                    

                </Scene>



            </Stack>
        </Router>
    )
}


export default RouterComponent;




