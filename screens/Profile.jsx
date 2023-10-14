
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Badge } from "react-native-paper";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Import image
import user1 from "../assets/img/3d1.png";

// Import icon
import { Feather } from "@expo/vector-icons";


export default function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Lắng nghe sự kiện thay đổi trạng thái xác thực
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Người dùng đã đăng nhập
        const userRef = collection(firestore, "User");
        const q = query(userRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        //Tạo mảng để lưu trữ tạm
        const userDataArray = []; 
        querySnapshot.forEach((doc) => {
        // Lấy dữ liệu của người dùng từ Firestore
          const Data = doc.data();
          userDataArray.push(Data)
          console.log(Data)
        });
        setUser(userDataArray);
      } else {
        // Người dùng đã đăng xuất
        setUser(null);
      }
    });
    return () => {
      // Hủy đăng ký lắng nghe khi unmount component
      unsubscribe();
    };
  }, []);

  return (
    <View className="w-full h-full flex items-center">
      <View className="flex-row items-center justify-between w-11/12 pt-8 pb-6">
        <Text className="flex flex-row items-center font-bold text-4xl">
          <Text className="text-blue-700">Blue</Text>
          <Text>der</Text>
        </Text>
        <TouchableOpacity>
          <Badge size={8} style={{ backgroundColor: "#000AFFE0" }} />
          <Feather name="bell" size={30} color="#000AFFE0" />
        </TouchableOpacity>
      </View>
      {user && user.map((userData, index) => (
        <View className="w-11/12" key={index}>
          <View className="w-11/12 items-center">
            <TouchableOpacity className="self-end">
              <Feather name="edit" size={30} color="#000AFFE0" />
            </TouchableOpacity>
            <Image source={user1} className="w-72 h-72 rounded-full" />
            <Text className="font-bold text-3xl">{userData.name}, Bạn</Text>
          </View>
          <ScrollView className="w-11/12">
            <View className="flex-row justify-between flex-wrap mt-3 mb-1 ">
              <Text className="text-xl font-bold">Độ tuổi:</Text>
              <Text className="text-xl ">{userData.age}</Text>
            </View>
            <View className="flex-row justify-between flex-wrap mt-3 mb-1 ">
              <Text className=" text-xl  font-bold">Giới Tính:</Text>
              <Text className="text-xl ">{userData.gender}</Text>
            </View>
            <View className="flex-row justify-between flex-wrap mt-3 mb-1">
              <Text className=" text-xl font-bold">Địa chỉ:</Text>
              <Text className="text-xl">{userData.address}</Text>
            </View>
            <View className="flex-row justify-between flex-wrap mt-3 mb-1 ">
              <Text className=" text-xl  font-bold">Tình trạng:</Text>
              <Text className="text-xl">{userData.relationship}</Text>
            </View>
            <View className="min-h-[200px] bg-slate-200 rounded-[35px] mt-3">
              <View className="ml-7 mt-3">
                <Text className="text-2xl font-bold ">Bio</Text>
                <Text className="text-lg">{userData.bio}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      ))}
    </View>
  );
}