import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

const image ={uri : "https://preppykitchen.com/wp-content/uploads/2019/08/waffle-recipe-.jpg"};
export default function App() {
  return (
    <>
   
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View>
        <View style= {styles.marginHeader}>
        <Text style= {styles.blanc}  >Food Parlour</Text>
        <Text style= {styles.textCenter}> CAFE - RESTAURANT</Text>
    </View>
    <View style= {styles.marginTitle}>
    <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>Email</Text>
      <Text style={styles.text}>Phone</Text>
      <Button color="#DC143C" title="Sign up"></Button>
      <Text  >Already a Member ? Login</Text>
    </View>
        </View>
    
      
    </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image:{
    flex:1,
    resizeMode: "cover",
    justifyContent:"center",
  },
 text:{
    color: "white",
    fontSize:18,
    fontWeight:"regular",
  },
  blanc:{
    color:"white",
    fontSize:55,
    fontWeight:"regular",
    textAlign:"center",
   
  },
  textCenter:{
    textAlign:"center",
    fontSize:15,
    color:"white",
  
  },
  marginHeader:{
    marginBottom:"8em",
    marginTop:"4em"
  },

  marginTitle:{
    marginBottom:"15em",
  },

  button:{
    backgroundColor:"yellow",
  }

});
