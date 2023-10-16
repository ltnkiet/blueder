import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator
} from 'react-native'
import { Badge } from 'react-native-paper'
import { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH, FIREBASE_DB } from '../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

// Import image
import user1 from '../assets/img/3d1.png'

// Import icon
import { Feather } from '@expo/vector-icons'

// Custom component UI
const Row = ({ data, title }) => (
  <View className='flex-row justify-between flex-wrap mt-3 mb-1 '>
    <Text className='text-xl font-bold'>{title}:</Text>
    <Text className='text-xl '>{data}</Text>
  </View>
)

export default function Profile() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        // Người dùng đã đăng nhập
        const userRef = collection(FIREBASE_DB, 'User')
        const q = query(userRef, where('email', '==', user.email))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          // Lấy dữ liệu của người dùng từ Firestore
          setUserData(doc.data())
        })
      } else {
        // Người dùng đã đăng xuất
        setUserData(null)
      }
    })
    return () => {
      // Hủy đăng ký lắng nghe khi unmount component
      unsubscribe()
    }
  }, [])
  
const { name, age, email, address, gender, bio, relationship } = userData
  return (
    <SafeAreaView>
      <View className='w-full h-full flex items-center'>
        <View className='flex-row items-center justify-between w-11/12 pt-8 pb-6'>
          <Text className='flex flex-row items-center font-bold text-4xl'>
            <Text className='text-blue-700'>Blue</Text>
            <Text>der</Text>
          </Text>
          <TouchableOpacity>
            <Badge size={8} style={{ backgroundColor: '#000AFFE0' }} />
            <Feather name='bell' size={30} color='#000AFFE0' />
          </TouchableOpacity>
        </View>
        <View className='w-full items-center flex-1'>
          <View className='w-11/12 items-center '>
            <TouchableOpacity className='self-end'>
              <Feather name='edit' size={30} color='#000AFFE0' />
            </TouchableOpacity>
            <Image source={user1} className='w-72 h-72 rounded-full' />
            <Text className='font-bold text-3xl'>{name}, Bạn</Text>
          </View>
          <ScrollView className='w-11/12'>
            <Row data={age} title='Độ tuổi' />
            <Row data={gender} title='Giới Tính' />
            <Row data={address} title='Địa chỉ' />
            <Row data={relationship} title='Tình trạng' />
            <View className='min-h-[200px] bg-slate-200 rounded-[35px] my-3'>
              <View className='ml-7 mt-3'>
                <Text className='text-2xl font-bold '>Bio</Text>
                <Text className='text-lg'>{bio}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}
