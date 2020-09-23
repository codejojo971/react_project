import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
import { SimpleLineIcons,Zocial,Fontisto,FontAwesome5 } from '@expo/vector-icons';


const image ={uri : "https://preppykitchen.com/wp-content/uploads/2019/08/waffle-recipe-.jpg"};
export default function App() {
   const [nom,setNom]=useState("")
   const [email,setEmail]=useState("")
   const [phone,setPhone]=useState("")
  return (
    <>
   
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style= {styles.container1}>
          <View style= {styles.marginHeader}>
            
            <SimpleLineIcons name="cup" size={32} color="white" />
            <Text style= {styles.blanc}  > <Text style= {styles.red}> Food </Text> Parlour</Text>
            <Text style= {styles.textCenter}>  CAFE - RESTAURANT</Text>
          </View>
          <View style= {styles.marginTitle}> 
          
            <Text style={styles.text}><FontAwesome5 name="user-alt" size={24} color="#DC143C" ></FontAwesome5> Name</Text>
            <TextInput
              style={{ height: 40, borderBottomColor: 'white', borderBottomWidth: 1 }}
              onChangeText={text => setNom(text)}
              value={nom}
            />
            <Text style={styles.text}><Zocial name="email" size={24} color="#DC143C"></Zocial> Email</Text>
            <TextInput
              style={{ height: 40, borderBottomColor: 'white', borderBottomWidth: 1 }}
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <Text style={styles.text}><Fontisto name="phone" size={24} color="#DC143C" ></Fontisto> Phone</Text>
            <TextInput
              style={{ height: 40, borderBottomColor: 'white', borderBottomWidth: 1 }}
              onChangeText={text => setPhone(text)}
              value={phone}
            />
            
            <Button color="#DC143C" title="Sign up"></Button>
            <Text style={styles.textFooter} >Already a Member ? Login</Text>
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
    textAlign:"left"
  },
  blanc:{
    color:"white",
    fontSize:50,
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

  container1:{
    marginLeft:"2em",
    marginRight:"2em",
    textAlign:"center"
  },
  red:{
    color:"#DC143C",
    fontWeight: "bold"
  },
  textFooter:{
    color: "white",
    fontSize:18,
    fontWeight:"regular",
    textAlign:"center",
    marginTop:"2em"
  },

});
