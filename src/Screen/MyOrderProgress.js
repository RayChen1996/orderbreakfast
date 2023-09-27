import React, { useState,useEffect } from 'react'
import {View,Text, FlatList,Modal,StyleSheet,Image,TouchableOpacity, Alert,RefreshControl ,ActivityIndicator} from 'react-native'
import _Header from '../components/_header'
import Category from '../components/OrderStatusBar' 
import axios from 'axios';
import * as Progress from 'react-native-progress';

const handleViewItemPress = () => {
  // 弹出警告消息
  Alert.alert('餐點訊息', `您點選的是`);

};

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={handleViewItemPress}>
  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, }}>

    <View style={{ flex: .8, marginLeft: 10,padding:5 }}>
      <Text style={{color:'black',fontSize:18,fontWeight:"bold"}}>{item.M_Name}</Text>

      <Text style={{color:'gray',fontSize:14}}>{item.M_Name}</Text>
      <Text style={{color:'black',}}> 
         ${item.Price} 
      </Text>
      <View style={{flex:1,flexDirection:'row'  }}>

            <View style={{flex:.333}}>
             
            </View>
            <View style={{flex:.333}}>
                
            </View>
            <View  style={{flex:.333}}>
                
            
            </View>
      </View>

    </View>







<View style={{ flex: 0.39, marginRight:15, paddingRight:15, justifyContent: 'center', alignItems: 'center' }}>
  

{
  item.Progress === 0 ? (
    <Text style={{color:'black'}}>等待中</Text>
  ) : item.Progress === 1 ? (
    <Text style={{ transform: [{ rotate: '45deg' }],color:'#ccc',borderWidth:1,padding:10,borderColor:'#ccc' }}>已完成</Text>
  ) : (
    <View>
      <Progress.Bar progress={item.Progress} />
      <Text style={{color:'black'}}>製作中</Text>  
    </View>
  )
}
</View>

    
    
  </View>
  </TouchableOpacity>
);


const MyOrderProgress = () => {
  const [isLoading, setIsLoading] = useState(true);
    const [menu,setAllMenu] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [showCatrgory,setShowCatrgory] = useState(false);
 
   const onRefresh = () => {
    setRefreshing(true); // 启动刷新
    handleClickGetMenu(); // 获取新数据
  };
    const handleClickGetMenu = () =>{
       setRefreshing(true); // 启动刷新
        axios.get("https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/Orders")
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

  useEffect(() => {
   handleClickGetMenu()
  }, []);
  return (
    <View style={{ flex: 1 ,flexDirection:'column'   }}>
    
        <View style={{flex:.1, }}>
           <_Header hederText="訂單追蹤" />
        </View>
  
        <View style={{flex:.9,  }} >
            <View style={{flex:.13, padding:5, justifyContent:'center',alignItems:'center'}}>
            <Category />
          
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

export default MyOrderProgress