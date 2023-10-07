 
import React, { useState,useEffect } from 'react'
import {View,Text, FlatList,Modal,StyleSheet,Image,RefreshControl ,TouchableOpacity, ToastAndroid , TextInput, Alert,ActivityIndicator ,ProgressBarAndroid} from 'react-native'
import MyHeader from '../components/_header'
const Checkout = ({ navigation }) => {
  let [orderList,setOrderList] =  useState([])

  orderList = [
    {
        id:1,
        count:1,
        orderName:"韓式辣味鍋貼",
        Price:80
    },
    {
        id:2,
        count:1,
        orderName:"玉米濃湯",
        Price:80
    },
    {
        id:3,
        count:1,
        orderName:"韓式辣味水餃",
        Price:80
    },
    {
        id:4,
        count:1,
        orderName:"珍珠炒手 【紅油】",
        Price:80
    },

  ]
  const OrderItem = ({ item }) => (
    <TouchableOpacity
    style={{
        flex:1,
        width:'100%',
 
        justifyContent:'space-between',
        flexDirection:'row',
        padding:5
    }}
    >
      <View
      style={{

        flexDirection:'row'
      }}
      >
        <Text
        style={{
            color:'#000'
        }}
        >X{item.count}</Text>

        <Text
        style={{
            color:'#000'
        }}
        >{item.orderName}</Text>      
      </View>
      <View>
       <Text
        style={{
            color:'#000'
        }}
        >{item.Price}</Text>  
      </View>




    </TouchableOpacity>  
  );



  return (
    
    <View style={{flex:1,flexDirection:'column'}}>

        <View 
        style={{
            flex:.85,
            
        }}>

        <View
            style={{
                padding:15,
                margin:15,
                backgroundColor:'#fff',
                borderRadius:10,
            }}
        >
        
        <Text
        style={{
             color:"black",
             fontWeight:'900',
             fontSize:20
        }}
        >訂單內容</Text>

        <FlatList 
        data={orderList}
        renderItem={OrderItem}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', flex: 0.4 }}></View>
           <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', flex: 0.4 }}></View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', flex: 0.4 }}></View>
        </View>


        <View style={{ width:'100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{    flex: 0.5 }}>
              <Text
                style={{
                    color:"black",
                    fontWeight:'900',
                    fontSize:20
                }}
                >小計</Text>
          </View>
            
          <View style={{    flex: 0.5 }}>
               <Text
                style={{
                    color:"black",
                    fontWeight:'900',
                    fontSize:20,
                    textAlign:'right'
                }}
                >$301</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{    flex: 0.5 }}>
              <Text
                style={{
                    color:"black",
                    fontWeight:'900',
                    fontSize:20    
                }}
                >外送服務費</Text>
          </View>
            
          <View style={{  flex: 0.5 }}>
               <Text
                style={{
                    color:"black",
                    fontWeight:'900',
                    fontSize:20,
                      textAlign:'right'
                }}
                >$0</Text>
          </View>
        </View>






        
        </View>




        
        </View>
        



        <View 
        style={{
            flex:.05,
            flexDirection:'row'
        }}>
        
            <View
            style={{
                flex:.1
            }}
            >
              
            </View>
            <View
            style={{
                flex:.6,
                flexDirection:'row',
                alignItems:'flex-end',
                
            }}
            >
                <Text
                style={{
                    
                    color:"black",
                    fontWeight:'900',
                    fontSize:25,paddingRight:5
                }}
                >總金額</Text>

                <Text
                style={{ 
                    color:"#ccc",
                    fontWeight:'900',
                    fontSize:16,
                    textAlign:'center'
                }}  
                >費用</Text>            
            
            </View>
            <View
            style={{
                flex:.15,
                alignItems:'flex-end'
            }}
            >
                <Text
                style={{ 
                    color:"#000",
                    fontWeight:'900',
                    fontSize:20,
                    textAlign:'center'
                }}
                >$334</Text>                
            </View>


            <View
            style={{
                flex:.1
            }}
            >
  

            
            </View>
        
        </View>
        <View 
        style={{
            flex:.1,
            padding:5,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row'
        }}>

         <View
         style={{
            flex:.11
         }}>

         
         
         
         </View>
        
    

          <TouchableOpacity
            onPress={()=>{
                navigation.navigate('payment');
            }}
            style={{
                flex:.88,
                backgroundColor:'orange',
                padding:15,
                borderRadius:5,
                justifyContent:'center',
                alignItems:'center',
                
            }}
            >

            <Text 
            style={{
                color:'#fff',
                fontSize:18,
                fontWeight:'900'

            }}
            >前往付款</Text>
          </TouchableOpacity>



          <View
            style={{
                flex:.11
            }}>
         
         
          </View>



        </View>

    </View>
  )
}


export default Checkout