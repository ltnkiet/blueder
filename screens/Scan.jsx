import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

// Import icon
import { Feather } from '@expo/vector-icons'


export default function Scan() {
  return (
<View className='w-full h-full flex items-center'>
      <View className='flex-row items-center justify-between w-11/12 py-6'>
        <Text className='flex flex-row items-center font-bold text-4xl'>
          <Text className='text-blue-700'>Blue</Text>
          <Text>der</Text>
        </Text>
        <TouchableOpacity>
          <Feather name='bell' size={30} color='#000AFFE0' />
        </TouchableOpacity>
      </View>
      <View className='flex-row items-center justify-between border rounded-3xl w-11/12 mb-6'>
        <View className='px-3'>
          <Feather name='search' size={24} color='black' />
        </View>
        <TextInput placeholder='Tìm Kiếm' className='w-full h-10 ml-2 text-lg' />
      </View>
      <View className='w-11/12'>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cum
          suscipit iste nemo quo dignissimos nam fuga consequatur repellat aliquam
          id omnis, vel earum nobis. Impedit modi quos ratione. Officiis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cum
          suscipit iste nemo quo dignissimos nam fuga consequatur repellat aliquam
          id omnis, vel earum nobis. Impedit modi quos ratione. Officiis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cum
          suscipit iste nemo quo dignissimos nam fuga consequatur repellat aliquam
          id omnis, vel earum nobis. Impedit modi quos ratione. Officiis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cum
          suscipit iste nemo quo dignissimos nam fuga consequatur repellat aliquam
          id omnis, vel earum nobis. Impedit modi quos ratione. Officiis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cum
          suscipit iste nemo quo dignissimos nam fuga consequatur repellat aliquam
          id omnis, vel earum nobis. Impedit modi quos ratione. Officiis.
        </Text>
      </View>
    </View>
  )
}

