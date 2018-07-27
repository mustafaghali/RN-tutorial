import React, { Component } from 'react';
import {FlatList, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  ActivityIndicator, 
  NetInfo} from 'react-native';
import axios from 'axios'; 

const { width } = Dimensions.get('window');


function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection !</Text>
    </View>
  );
}




export default class FlatListBasics extends Component {
  constructor() {
    super();
    this.state = {
      loading:true,
      names : [],
      isConnectedToInternet:false    
    };
}
  
handleConnectivityChange = isConnected => {
    this.setState({isConnectedToInternet:isConnected});
};


componentDidMount() {
  NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
}

componentWillUnmount() {
NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
}



  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> {
      // handle success
      console.log(response);
      this.setState({ names :response.data.map((item)=>{return {...item,key:item.title}})}); 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then( ()=> {  
      this.setState({ loading:false});
     
      // always executed
    });
  }
  

  
  OfflineMessage() {
    if (!this.state.isConnectedToInternet)
    return <MiniOfflineSign />;
    else 
    return null;
  }

  render() {
  
    return (
      <View style={styles.container}>

       {this.OfflineMessage()}

        {this.state.loading?  
          <View>
            <Text>loading...</Text>
            <ActivityIndicator
              //  animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
          </View>
          :
          <FlatList
            data={this.state.names}
            renderItem={
            ({item}) => 
            <View style = {{width:Dimensions.get('window').width*0.5}}> 
             <Text style={styles.item}>{item.title}</Text>
             <Text style = {styles.item}>{item.body}</Text>
             <View style = {{borderBottomColor:'black',borderBottomWidth:1}} />
             </View>
             }
          /> 
         }
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  offlineContainer: {
    backgroundColor: 'rgb(181,36,36)',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    //top: 30
  },
  offlineText: { 
    color: '#fff'
  }
})
