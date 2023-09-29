import React, { useState,useEffect } from 'react'
import {View,Text, FlatList,Modal,StyleSheet,Image,RefreshControl ,TouchableOpacity, ToastAndroid , TextInput, Alert,ActivityIndicator ,ProgressBarAndroid} from 'react-native'
import _Header from '../components/_header'
import Category from '../components/Category'
import BreakfastCategory  from '../components/BreakfastCategory'
// import renderItem  from '../components/ListView/foodItem'
import menuData from '../../src/data/cart.json';
import ProgressCircle from '../components/ProgressCircle';
import * as Progress from 'react-native-progress';
import CustomLoader from '../components/CustomLoader';
import axios from 'axios';
import burger1 from '../assets/burger1.jpg'
import cookie from '../assets/egg1.jpg';
const Order = () => {

  const [refreshing, setRefreshing] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [menu,setAllMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [isQuantityModalVisible, setIsQuantityModalVisible] = useState(false);
  const handleIncrement = () => {
    setIsQuantityModalVisible(true);
  };

  const handleConfirmQuantity = () => {
    setIsQuantityModalVisible(false);
  };
   const onRefresh = () => {
    setRefreshing(true); // 启动刷新
    handleClickGetMenu(); // 获取新数据
  };
const renderItem = ({ item }) => (



<TouchableOpacity onPress={handleIncrement} >

  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, }}>
    <View style={{ flex: .8, marginLeft: 10,padding:5 }}>
      <Text style={{color:'black',fontSize:18,fontWeight:"bold"}}>{item.foodName}</Text>
      <Text style={{color:'gray',fontSize:14}}>{item.description}</Text>
      <Text style={{color:'black',}}> 
        ${item.foodPrice} 
        <Text style={{ color: 'gray', paddingLeft:5, marginLeft:10, textDecorationLine: 'line-through' }}>
        {item.OriginPrice}
        </Text>
      </Text>
      <View style={{flex:1,flexDirection:'row'}}>

        <View style={{flex:.333}}>

        </View>
        <View style={{flex:.333}}>
        
        </View>

        <View  style={{flex:.333}}>
        
        </View>
      </View>

    </View>
  <View style={{ flex: 0.39  }}>
    <Image
      style={{
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 15,
        margin: 5,
      }}
      source={item.foodImage === 'burger' ? burger1 : cookie}
    />
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 21, 
        bottom: -10,
        margin: 5,
      }}
    >
      <View
        style={{
          backgroundColor: 'orange',
          width: 30,
          height: 30,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
      </View>
    </TouchableOpacity>
  </View>
  
  </View>


      <Modal
       style={{width:"90%"}}
        animationType="slide"
        transparent={true}
        visible={isQuantityModalVisible}
        onRequestClose={() => setIsQuantityModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:'90%' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{color:'#000', fontSize: 18, marginBottom: 10 }}>選擇數量</Text>
         
            

              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:.1,backgroundColor:'gray'}}>


                </View>
                <View style={{flex:.3,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                     <TouchableOpacity style={{backgroundColor:'orange',  }}>
                       <Text style={{color:'black',fontSize:18,color:'white',fontWeight:'900'}}>-</Text>
                     </TouchableOpacity>
                </View>                
                <View style={{flex:.5,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontWeight:'900',fontSize:20}}>1</Text>
                </View>
                <View style={{flex:.3,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                     <TouchableOpacity style={{backgroundColor:'orange',  }}>
                       <Text style={{color:'black',fontSize:18,color:'white',fontWeight:'900'}}>+</Text>
                     </TouchableOpacity>
                </View>                
                <View  style={{flex:.1,backgroundColor:'green'}}>
                </View>
              </View>


            <TouchableOpacity
              onPress={handleClickPostOrder}
              style={{
                marginTop: 10,
                backgroundColor: 'orange',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>確定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


  </TouchableOpacity>
);



    const handleClickGetMenu = () =>{
          axios.get("https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/Menus")
          .then((response) => {
            console.log(response.data) 
              setAllMenu(response.data)
               setIsLoading(false); 
               setRefreshing(false); // 停止刷新
          })
          .catch((error) => {
             setIsLoading(false); // 
          });
      }




      const handleClickPostOrder = (item) =>{
          let data = 
            {
              id: Math.random().toString(36).substr(2, 9),
              M_Name: "測試餐點1",
              M_DT: "2023-09-23 10:30:00",
              M_ImgSrc: "",
              OrderType: 2,
              CIdx: 1,
              Price: 360
            }
          

          axios.post("https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/ShoppingCart",data)
          .then((response) => {
            console.log(response.data) 
            console.log("成功新增到購物車")
            handleConfirmQuantity()
            ToastAndroid.showWithGravityAndOffset(
              '新增到購物車成功',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );



          })
          .catch((error) => {
      
            ToastAndroid.showWithGravityAndOffset(
              '新增到購物車失敗',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );

          });
      }





  useEffect(() => {
   handleClickGetMenu()
  }, []);
 
  return (
    <View style={{ flex: 1 ,flexDirection:'column'   }}>
    
        <View style={{flex:.1, }}>
           <_Header hederText="挑選早餐" />
        </View>
  
        <View style={{flex:.9,  }} >
            <View style={{flex:.13, padding:5, justifyContent:'center',alignItems:'center'}}>
            <Category />
          
            </View>

            <View style={{flex:.125, padding:5, justifyContent:'center',alignItems:'center'}}>
              <BreakfastCategory/>

            </View>

            <View style={{flex:.7}}>
                  
                    {isLoading ? ( // 如果正在加載數據，顯示 loading 效果
                      <ActivityIndicator size="large" color="orange" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
                    ) : (
                      <FlatList
                        data={menu}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        refreshControl={
                          <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                          />
                        }

                      />
                    )}
                


            </View>

            <View style={{flex:.1 ,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            >
              <View style={{flex:.2}}>

               
              </View>
              <View style={{flex:.6}} >
 
              </View>
              <View style={{flex:.2}}>


              </View>

            </View>
         
        </View>         
    
 

    </View>
    
  )
}


const styles = StyleSheet.create({
  emptyCartText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'orange',
    fontSize: 16,
  },  
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color:'black',
    marginBottom: 15,
    textAlign: 'center',
  },

});

export default Order