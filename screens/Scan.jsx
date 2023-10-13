
import React, { useState } from 'react'
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


// Import icon
import { Feather } from '@expo/vector-icons'


export default function Scan() {
  const [loading, setLoading] = useState(false)

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
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Nhật Kha</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Celia Nolan</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Fred Franecki</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Glen Lockman</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Miss Abraham Greenholt</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Gerald Jacobs</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Lana Gaylord</Text>
            </View>
            <View className='flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4'>
              <Image className='w-12 h-12 rounded-full mx-5' source={user1} />
              <Text className='text-xl font-bold'>Eleanor Hilll</Text>
            </View>
          </ScrollView>
        )}

      </View>
    </View>
  )
}


