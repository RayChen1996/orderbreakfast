import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const BreakfastCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('蛋餅類'); // 初始化選中的分類

  const categories = [
    '蛋餅類',
    '套餐類',
    '炸物類',
    '果醬吐司',
    '漢堡類',
    '吐司類',
    '捲餅類',
    '軟法貝果',
    '法國吐司',
    '沙拉堡',
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedCategory(category)}
          style={[
            styles.categoryItem,
            selectedCategory === category && styles.selectedCategoryItem,
          ]}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedCategoryItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
  },
  selectedCategoryText: {
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default BreakfastCategory;
