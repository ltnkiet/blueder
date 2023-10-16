<<<<<<< HEAD

import React, { useState, useEffect } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 827126654ec6136a7b43d6048aa8be84fa2e810c
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native'

// Import image
import user1 from '../assets/img/3d1.png'
<<<<<<< HEAD
// Import icon
import { Feather } from '@expo/vector-icons'
//Import firestore
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../config/firebase';
=======

// Import icon
import { Feather } from '@expo/vector-icons'
>>>>>>> 827126654ec6136a7b43d6048aa8be84fa2e810c

export default function Scan() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore(app);
      const userCollection = collection(firestore, 'User');
      try {
        const querySnapshot = await getDocs(userCollection);
        // Lặp qua kết quả và cập nhật mảng người dùng
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push(doc.data());
        });
        console.log(userData)
        setUsers(userData);
        setLoading(false); // Đã tải xong, đặt loading thành false
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View className='w-full h-full flex items-center'>
      <View className='flex-row items-center justify-between w-11/12 pt-8 pb-6'>
        <Text className='flex flex-row items-center font-bold text-4xl'>
          <Text className='text-blue-700'>Blue</Text>
          <Text>der</Text>
        </Text>
        <TouchableOpacity>
          <Feather name='bell' size={30} color='#000AFFE0' />
        </TouchableOpacity>
      </View>

      <View className='flex-row items-center justify-between border rounded-3xl w-11/12 mb-8'>
        <View className='px-3'>
          <Feather name='search' size={24} color='black' />
        </View>
        <TextInput
          placeholder='Tìm Kiếm'
          className='w-full h-10 ml-2 text-lg'
        />
      </View>
      <View className='w-11/12 flex-1'>
        {loading ? (
          <ActivityIndicator
            className='flex-1'
            size='large'
            color='#000AFFE0'
          />
        ) : (
          <ScrollView>
            {users.map((user, index) => (
            <View key={index} className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>{user.name}</Text>
            </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  )
}
