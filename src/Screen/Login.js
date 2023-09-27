import React from 'react'
import {Text,Image,View, TouchableOpacity ,  StyleSheet  ,TextInput} from 'react-native'
import _Header from '../components/_header'
const Login = () => {
    const [text, onChangeText] = React.useState('');


  return (
    <View style={{ flex: 1 ,flexDirection:'column'   }}>
    
        <View style={{flex:.1,  }}>
           <_Header hederText="會員登入" />
        </View>
  
        <View style={{flex:.9  }} >
         <View style={{flex:.1,flexDirection:'row'   }}>
          <View style={{flex:.15}}>

              </View>
             <View style={{flex:.7}}>
            <TextInput
            placeholder='輸入帳號'
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
             
             </View>
       

             <View style={{flex:.15}}>

              </View>
         </View>
  
         <View style={{flex:.1,flexDirection:'row'   }}>
              <View style={{flex:.15}}>

              </View>

              <View style={{flex:.7}}>
                    <TextInput
                            placeholder='輸入密碼'
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                  />
              </View>


              <View style={{flex:.15}}>

              </View>
      
         
         </View>



        <View style={{flex:.2,flexDirection:'row' , marginTop:10   }}>
        <View style={{flex:.2}}>
        </View>
        <View style={{flex:.6}}>

          <TouchableOpacity
          style={{backgroundColor:'orange', padding:10, borderRadius:5, justifyContent:'center',alignItems:'center'}}
          >
            
          <Text style={{color:'black'}}>登入</Text>
          </TouchableOpacity>        
        </View>        
        <View style={{flex:.2}}>
        </View>

         
        </View>



        <View style={{flex:.1,flexDirection:'row'    }}>
        <View style={{flex:.2}}>
        </View>
        <View style={{flex:.6}}>

          <TouchableOpacity
          style={{backgroundColor:'white', borderColor:'orange',borderWidth:1, padding:10, borderRadius:5, justifyContent:'center',alignItems:'center'}}
          >
            
          <Text style={{color:'black'}}>訪客登入</Text>
          </TouchableOpacity>        
        </View>        
        <View style={{flex:.2}}>
        </View>

         
        </View>




        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', flex: 0.4 }}></View>
          <Text style={{ marginHorizontal: 10,color:'gray' }}>或使用第三方登入</Text>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', flex: 0.4 }}></View>
        </View>





        
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            <Text style={{ color: 'black' }}>Google 登入</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            <Text style={{ color: 'white' }}>FB 登入</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            <Text style={{ color: 'white' }}>LINE 登入</Text>
          </TouchableOpacity>
          
          
        </View>






         
        </View>         
    
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'black',
    borderColor:'orange',
    borderRadius:5,backgroundColor:'white'
  },
});

export default Login