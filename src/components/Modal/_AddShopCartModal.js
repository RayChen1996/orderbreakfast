import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const _AddShopCart = ({visible, onClose, onSubmit, mealName}) => {
  const [quantity, setQuantity] = useState(1);
  const [sauce, setSauce] = useState('不醬');

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const selectSauce = selectedSauce => {
    setSauce(selectedSauce);
  };
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.dialog}>
          <Text style={styles.mealName}>{mealName}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.quantityButton}>
              <Text style={styles.label}>-</Text>
            </TouchableOpacity>
            <Text style={styles.label}>{quantity}</Text>
            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.quantityButton}>
              <Text style={styles.label}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => selectSauce('要醬多')}
              style={[
                styles.sauceButton,
                {
                  backgroundColor:
                    sauce === '要醬多' ? 'orange' : 'transparent',
                },
              ]}>
              <Text style={styles.label}>要醬多</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectSauce('不醬')}
              style={[
                styles.sauceButton,
                {backgroundColor: sauce === '不醬' ? 'orange' : 'transparent'},
              ]}>
              <Text style={styles.label}>不醬</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectSauce('醬少')}
              style={[
                styles.sauceButton,
                {backgroundColor: sauce === '醬少' ? 'orange' : 'transparent'},
              ]}>
              <Text style={styles.label}>醬少</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onSubmit} style={styles.confirmButton}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '900',
                fontSize: 20,
                marginVertical: 5,
              }}>
              確認餐點
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.label}>取消</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // 对话框在底部
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
  },
  dialog: {
    height: screenHeight / 2.5, // 高度占屏幕的1/3
    width: '100%', // 宽度占满屏幕
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    color: '#000',
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  sauceButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  confirmButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    color: '#fff',
  },
  closeButton: {
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default _AddShopCart;
