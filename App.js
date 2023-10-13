import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
    < Image source={require('./image/xe.jpg')}
          style={{
            width: 380,
            height: 260,
            alignSelf:'center',
            justifyContent:'center'
          }}
        />
     <Image source={require('./image/header.webp')}
          style={{
            width: 300,
            height: 150, 
            alignSelf:'center',
            justifyContent:'center'
          }}
        />
     </View>
     <Text>Chào mừng bạn đến với Ahamove</Text>
      <StatusBar style="auto" />
      <View style={styles.body}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng Kí</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.footer} >
      <Text style={styles.footerText}>© 2023 Your App</Text>
       < View style={{
            flexDirection:'row',
            height:60,
            width:100,
            backgroundColor:'white',
            justifyContent:"center",
            alignItems:'center',
            marginEnd:10,
            marginStart:10

       }}>
        <Icon name="facebook" size={40} color='#4267b2'  style={{ marginEnd:10,
            marginStart:10}}/> {/* Ví dụ sử dụng biểu tượng sao */}
            <Icon name="instagram" size={40} color="#FBAD50"  style={{ marginEnd:10,
            marginStart:10}}/> {/* Ví dụ sử dụng biểu tượng sao */}
            <Icon name="twitter" size={40} color="#1DA1F2"  style={{ marginEnd:10,
            marginStart:10}}/> {/* Ví dụ sử dụng biểu tượng sao */}
        
       </View>

      
        
      </View>
      <Text>Bản quyền thuộc về Đại Lợi-20064471</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  header: {
    
    alignSelf:'center',
    justifyContent:'center'
    
  },
  body: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  footer: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    
    color: 'black',
    fontSize: 2,
  },
});
