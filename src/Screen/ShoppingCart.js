import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  FlatList,
} from 'react-native';
import _Header from '../components/_header';
import burger1 from '../assets/burger1.jpg';
import cookie from '../assets/egg1.jpg';
import code from '../assets/code.jpg';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
const ShoppingCart = ({navigation}) => {
  const [OrderContent, setOrderContent] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let [cartItems, setCartItems] = useState([]); // 用于存储购物车项的状态
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonText, setButtonText] = useState('點擊這裡刷新');
  const goToCheckout = () => {
    navigation.navigate('checkout'); // Navigate to ScreenB
  };
  const handleShowModal = item => {
    console.log(item);
    let OrderJson = {
      Price: 150,
      MealName: '測試餐點',
    };
    setOrderContent(JSON.stringify(OrderJson));
    setModalVisible(true);
  };

  const onRefresh = () => {
    console.log(' enter onRefresh  ');
    setButtonText('載入中...');
    setTimeout(() => {
      // 更新购物车数据

      // 停止刷新动画
      setRefreshing(false);
      setButtonText('點擊這裡刷新'); // 数据获取成功后，按钮文本还原为"點擊這裡刷新"
    }, 1000); // 这里的 1000 表示模拟获取数据的延时，可以根据实际情况调整

    setRefreshing(true); // 启动刷新
    handleClickGetMenu(); // 获取新数据
  };

  const handleClickPostOrder = () => {
    let data = {
      id: Math.random().toString(36).substr(2, 9),
      M_Name: '測試',
      M_DT: '2023-09-23 10:30:00',
      M_ImgSrc: '',
      OrderType: 2,
      CIdx: 1,
      Price: 30,
      Progress: 0,
    };
    axios
      .post(
        'https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/Orders',
        data,
      )
      .then(response => {
        console.log(response.data);
        Alert.alert('已送單！');
      })
      .catch(error => {
        Alert.alert('送單失敗！');
      });
  };

  const OrderItem = ({item}) => (
    <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
      <View style={{flex: 0.8, marginLeft: 10}}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {item.M_Name}
        </Text>
        <Text style={{color: 'gray', fontSize: 14}}>{item.description}</Text>
        <Text style={{color: 'black'}}>${item.Price}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.333}}></View>
          <View style={{flex: 0.333}}></View>
          <View style={{flex: 0.333}}></View>
        </View>
      </View>

      <View style={{flex: 0.39}}>
        <Image
          style={{
            width: 80,
            marginRight: 5,
            paddingRight: 15,
            height: 80,
            resizeMode: 'cover',
            borderRadius: 15,
            margin: 5,
          }}
          source={item.foodImage === 'burger' ? burger1 : cookie}
        />
        <TouchableOpacity
          onPress={() => handleClickDeleteShopCart(item.id)}
          style={{position: 'absolute', right: 5, bottom: 5}}>
          <View
            style={{
              backgroundColor: 'red',
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>-</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleSubmitOrder = () => {
    goToCheckout();
    return;
    Alert.alert(
      '確定提交訂單',
      '您確定提交訂單嗎？',
      [
        {
          text: '取消',
          style: 'cancel',
        },
        {
          text: '確定',
          onPress: () => {
            handleClickPostOrder();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleClickDeleteShopCart = id => {
    Alert.alert(
      '確認删除',
      `是否删除這一筆購物清單？`,
      [
        {
          text: '取消',
          onPress: () => console.log('取消删除'),
          style: 'cancel',
        },
        {
          text: '删除',
          onPress: () => {
            // 在此处执行删除购物车项的逻辑

            axios
              .delete(
                `https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/ShoppingCart/${id}`,
              )
              .then(response => {
                handleClickGetMenu();
              })
              .catch(error => {
                setIsLoading(false); //
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleClickGetMenu = () => {
    console.log(' enter onRefresh 2  ');
    axios
      .get(
        'https://json-server-vercel-w33n-git-main-raychen1996.vercel.app/ShoppingCart',
      )
      .then(response => {
        console.log(response.data);
        setCartItems(response.data);
        setIsLoading(false);
        setRefreshing(false); // 停止刷新
      })
      .catch(error => {
        setIsLoading(false); //
      });
  };

  useEffect(() => {
    handleClickGetMenu();
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 0.1}}>
        <_Header hederText="購物車" />
      </View>

      <View style={{flex: 0.9, flexDirection: 'column'}}>
        <View style={{flex: 0.9}}>
          {cartItems.length === 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/nodata.png')} // 添加你的空购物车图片路径
                style={{width: 200, height: 200, resizeMode: 'contain'}}
              />
              <Text style={styles.emptyCartText}>無任何購物車資料</Text>
              <TouchableOpacity onPress={onRefresh}>
                <Text style={styles.refreshText}>{buttonText}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={cartItems}
              renderItem={({item}) => <OrderItem item={item} />}
              keyExtractor={item => item.id}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </View>
        <View style={{flex: 0.1, flexDirection: 'column'}}>
          {cartItems.length === 0 ? (
            <View></View>
          ) : (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.1}}></View>
              <View
                style={{
                  flex: 0.8,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={handleShowModal}
                  style={{
                    flex: 0.4,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'orange',
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                    二維碼點餐
                  </Text>
                </TouchableOpacity>
                <View style={{flex: 0.1}}></View>

                <TouchableOpacity
                  onPress={handleSubmitOrder}
                  style={{
                    flex: 0.4,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'orange',
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                    送單
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.1}}></View>
            </View>
          )}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>請出示條碼提供給店員結帳！</Text>

            <QRCode
              value={OrderContent}
              size={200}
              bgColor="purple"
              fgColor="white"
            />

            {/**
            <Image
              style={{resizeMode: 'cover', borderRadius: 15, margin: 5}}
              source={code}
            />
           */}

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>關閉</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  centeredView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
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
    color: 'black',
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
  refreshText: {
    fontSize: 16,
    color: 'blue', // 设置刷新文本的颜色，可以根据你的设计更改颜色
    textDecorationLine: 'underline', // 添加下划线效果
  },
});

export default ShoppingCart;
