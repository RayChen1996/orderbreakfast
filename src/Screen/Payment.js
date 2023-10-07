import _Header from '../components/_header';
import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, FlatList, TouchableOpacity, Radio} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const Payment = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const paymentOptions = [
    {id: 1, optionText: '現金付款'},
    {id: 2, optionText: 'Apple Pay'},

    {id: 3, optionText: 'LINE Pay'},
    {id: 4, optionText: 'LINE Pay 其他帳號'},
  ];
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState();

  const renderPayMentItem = ({item}) => (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}
      onPress={() => setSelectedPayment(item.id)}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />

      <Text
        style={{
          marginLeft: 10,
          color: 'black',
        }}>
        {item.optionText}
      </Text>
      {/** 
    <Radio
        selected={selectedPayment === item.id}
        onPress={() => setSelectedPayment(item.id)}
      />
      <Text style={{ marginLeft: 10 }}>{item.optionText}</Text>
      {item.id === 3 && (
        <Text style={{ color: 'gray', marginLeft: 10 }}>**4444</Text>
      )}

    */}
    </TouchableOpacity>
  );

  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 0.9, flexDirection: 'column'}}>
        <View style={{flex: 0.9}}>
          <FlatList
            data={paymentOptions}
            renderItem={renderPayMentItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={{flex: 0.1, flexDirection: 'column'}}></View>
      </View>
    </View>
  );
};

export default Payment;
