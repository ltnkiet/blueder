import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
// Import image
import user1 from "../assets/img/3d1.png";
// Import icon
import { Feather } from "@expo/vector-icons";
//Import firestore
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../config/firebase";

import { useNavigation } from "@react-navigation/native";

export default function Scan() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const navigation = useNavigation();

  const handleUserSelect = (userData) => {
    navigation.push("Like", {userData});
  };

  useEffect(() => {
    const fetchData = async () => {
      const userCollection = collection(FIREBASE_DB, "User");
      try {
        const querySnapshot = await getDocs(userCollection);
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push(doc.data());
        });
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View className="w-full h-full flex items-center">
      <View className="flex-row items-center justify-between w-11/12 pt-8 pb-6">
        <Text className="flex flex-row items-center font-bold text-4xl">
          <Text className="text-blue-700">Blue</Text>
          <Text>der</Text>
        </Text>
        <TouchableOpacity>
          <Feather name="bell" size={30} color="#000AFFE0" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-between border rounded-3xl w-11/12 mb-8">
        <View className="px-3">
          <Feather name="search" size={24} color="black" />
        </View>
        <TextInput
          placeholder="Tìm Kiếm"
          className="w-full h-10 ml-2 text-lg"
        />
      </View>
      <View className="w-11/12 flex-1">
        {loading ? (
          <ActivityIndicator
            className="flex-1"
            size="large"
            color="#000AFFE0"
          />
        ) : (
          <ScrollView>
            {users.map((user, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleUserSelect(user)}>
                <View className="flex-row items-center bg-[#AAD3FE] h-20 rounded-2xl mb-4">
                  <Image className="w-12 h-12 rounded-full mx-5"source={user1}/>
                  <Text className="text-xl font-bold">{user.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
