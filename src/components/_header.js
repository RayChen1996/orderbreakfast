import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'


const _header = (props) => {
  return (
    <View style={{ flexDirection:'row',backgroundColor:'orange',justifyContent:'center',padding:10, alignItems:'center'}} >

         {/**
        
                 <TouchableOpacity style={{backgroundColor:'red',padding:8, borderRadius:8, fontSize:14}}  >
         <Text style={{fontWeight:'900'}} >返回</Text>
         </TouchableOpacity>

        
        */}


         <Text style={{color:'#fff',fontWeight:'bold',   fontSize:18}}>{props.hederText}</Text>

    
    
    </View>
  )
}

export default _header