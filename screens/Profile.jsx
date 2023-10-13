import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Badge } from 'react-native-paper'

// Import image
import user1 from '../assets/img/3d1.png'

// Import icon
import { Feather } from '@expo/vector-icons'

export default function Profile() {
  return (
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
      <View className='w-11/12 items-center'>
        <TouchableOpacity className='self-end'>
          <Feather name='edit' size={30} color='#000AFFE0' />
        </TouchableOpacity>
        <Image source={user1} className='w-72 h-72 rounded-full' />
        <Text className='font-bold text-3xl'>Lý Vĩ Phong, Bạn</Text>
      </View>
      <ScrollView className='w-11/12'>
        <View className='flex-row justify-between flex-wrap mt-3 mb-1 '>
          <Text className='text-xl font-bold'>Độ tuổi:</Text>
          <Text className='text-xl '>18</Text>
        </View>
        <View className='flex-row justify-between flex-wrap mt-3 mb-1 '>
          <Text className=' text-xl  font-bold'>Giới Tính:</Text>
          <Text className='text-xl '>Nam</Text>
        </View>
        <View className='flex-row justify-between flex-wrap mt-3 mb-1'>
          <Text className=' text-xl font-bold'>Địa chỉ:</Text>
          <Text className='text-xl'>Quận 8, TP HCM</Text>
        </View>
        <View className='flex-row justify-between flex-wrap mt-3 mb-1 '>
          <Text className=' text-xl  font-bold'>Tình trạng:</Text>
          <Text className='text-xl'>Đôc thân</Text>
        </View>
        <View className='min-h-[200px] bg-slate-200 rounded-[35px] mt-3'>
          <View className='ml-7 mt-3'>
            <Text className='text-2xl font-bold '>Bio</Text>
            <Text className='text-lg'>Pík kà pu!!! Dui dẻ dui dẻ</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
