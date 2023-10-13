import { View, Text, TouchableOpacity, Image } from 'react-native'
import {Badge} from 'react-native-paper'
import React from 'react'

//Import image
import user from '../assets/img/3d_unbg.png'

// Import icon
import { Feather, AntDesign, Foundation } from '@expo/vector-icons'

export default function Like() {
  return (
    <View className='w-full h-full flex items-center'>
      <View className='flex-row items-center justify-between w-11/12 pt-8 pb-6'>
        <Text className='flex flex-row items-center font-bold text-4xl'>
          <Text className='text-blue-700'>Blue</Text>
          <Text>der</Text>
        </Text>
        <TouchableOpacity>
          <Badge size={8} style={{backgroundColor:'#000AFFE0'}}/>
          <Feather name='bell' size={30} color='#000AFFE0' />
        </TouchableOpacity>
      </View>
      <View className='flex-1 justify-center bg-[#AAD3FE] w-11/12 rounded-[35px]'>
        <Image className='self-center' source={user} />
        <View className='ml-5 mt-2'>
          <Text className='font-bold text-3xl'>Nhật Kha, 20</Text>
          <Text className='font-medium text-base'>Quận Tân Phú, TP.HCM</Text>
        </View>
      </View>
      <View className='flex flex-row justify-around w-full mb-5 mt-8'>
        <TouchableOpacity className='w-20 h-20 bg-[#F55858] rounded-full flex items-center justify-center'>
          <AntDesign name='close' size={32} color='white' />
        </TouchableOpacity>
        <TouchableOpacity className='w-20 h-20 bg-[#434AF4] rounded-full flex items-center justify-center'>
          <Foundation name='heart' size={32} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
