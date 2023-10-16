import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../config/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false) // Set loading to false on URL change
  const navigation = useNavigation()
  const firebaseAuth = getAuth(app)

  const Login = async () => {
    setLoading(true)
    Keyboard.dismiss()
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        Alert.alert('Đăng nhập thành công', 'Success Message', [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => navigation.navigate('PreHome')
          }
        ])
        setLoading(false)
      })
      .catch((error) => {
        Alert.alert(
          'Đăng nhập thất bại',
          'Error Message',
          [
            {
              text: 'Hủy',
              onPress: () => Alert.alert('Cancel Pressed'),
              style: 'cancel'
            }
          ],
          {
            cancelable: true
          }
        )
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <View className='w-full h-full flex items-center justify-center'>
      {loading ? (
        <ActivityIndicator
          className='absolute w-screen h-screen bg-black opacity-20 z-10'
          size='large'
          color='#000AFFE0'
        />
      ) : null}
      <TouchableOpacity>
        <View className='-top-20 left-40'>
          <AntDesign name='questioncircleo' size={24} color='gray' />
        </View>
      </TouchableOpacity>
      <Text className='flex flex-row items-center font-bold text-7xl'>
        <Text className='text-blue-700'>Blue</Text>
        <Text>der</Text>
      </Text>
      <View className='flex flex-col my-10'>
        <View className='mb-10'>
          <Text className='mx-5 text-base font-semibold'>Email</Text>
          <TextInput
            className='border-2 w-[300px] h-[60px] border-slate-700 text-base rounded-3xl mt-3 px-5'
            onChangeText={(mail) => setEmail(mail)}
          />
        </View>
        <View>
          <Text className='mx-5 text-base font-semibold'>Mật khẩu</Text>
          <TextInput
            secureTextEntry={true}
            className='border-2 w-[300px] h-[60px] border-slate-700 text-base rounded-3xl mt-3 px-5'
            onChangeText={(pw) => setPassword(pw)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={Login}>
        <View className='w-[300px] h-[70px] bg-blue-700 rounded-3xl flex items-center justify-center'>
          <Text className='text-xl text-white font-bold'>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <View className='flex flex-row items-center font-bold text-7xl mt-10'>
        <Text className='text-base font-bold'>
          <Text>Bạn chưa có tài khoản?</Text>
          <Text
            onPress={() => {
              navigation.navigate('Register')
            }}
            className='text-blue-700'
          >
            {' '}
            Tạo tài khoản
          </Text>
        </Text>
      </View>
    </View>
  )
}
