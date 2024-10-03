import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screens_01 = () => {
  const navigation = useNavigation();
  const Item = ({ image, title, price, percent }) => {
    return (
      <TouchableOpacity style={{ flex: 1 }}>
        <Image source={image} height={90} resizeMode="contain" />
        <Text style={{ fontSize: 12, marginTop: 8 }}>{title}</Text>
        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <Image source={images.stars} />
          <Text style={{ fontSize: 10 }}>(15)</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "700" }}>{price}</Text>
          <Text style={{ fontSize: 12, color: "#969DAA" }}>{percent}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#1BA9FF",
          height: 42,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Image source={images.arrowleft} />
        <View
          style={{
            width: 192,
            height: 30,
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 8,
          }}
        >
          <Image source={images.search} />
          <TextInput placeholder="Dây cáp usb" style={{ width: "100%", height: "100%", paddingLeft: 4 }} />
        </View>
        <View style={{ position: "relative" }}>
          <Image source={images.cart} />
          <TouchableOpacity
            style={{ position: "absolute", right: -7, top: -4 }}
            onPress={() => navigation.navigate("Screen_02")}
          >
            <Image source={images.circle} />
          </TouchableOpacity>
        </View>
        <Image source={images.more} />
      </View>

      <ScrollView>
        <View style={{ paddingHorizontal: 20, marginTop: 22, rowGap: 20 }}>
          <View style={{ flexDirection: "row", columnGap: 30 }}>
            <Item image={images.item1} title="Cáp chuyển từ Cổng USB sang PS2..." price="69.900 đ" percent="-39%" />
            <Item image={images.item2} title="Cáp chuyển từ Cổng USB sang PS2..." price="100.900 đ" percent="-19%" />
          </View>
          <View style={{ flexDirection: "row", columnGap: 30 }}>
            <Item image={images.item3} title="Cáp chuyển từ Cổng USB sang PS2..." price="102.900 đ" percent="-59%" />
            <Item image={images.item4} title="Cáp chuyển từ Cổng USB sang PS2..." price="99.900 đ" percent="-32%" />
          </View>
          <View style={{ flexDirection: "row", columnGap: 30 }}>
            <Item image={images.item5} title="Cáp chuyển từ Cổng USB sang PS2..." price="22.900 đ" percent="-22%" />
            <Item image={images.item6} title="Cáp chuyển từ Cổng USB sang PS2..." price="67.900 đ" percent="-33%" />
          </View>
          <View style={{ flexDirection: "row", columnGap: 30 }}>
            <Item image={images.item1} title="Cáp chuyển từ Cổng USB sang PS2..." price="69.900 đ" percent="-39%" />
            <Item image={images.item2} title="Cáp chuyển từ Cổng USB sang PS2..." price="100.900 đ" percent="-19%" />
          </View>
          <View style={{ flexDirection: "row", columnGap: 30 }}>
            <Item image={images.item3} title="Cáp chuyển từ Cổng USB sang PS2..." price="102.900 đ" percent="-59%" />
            <Item image={images.item4} title="Cáp chuyển từ Cổng USB sang PS2..." price="99.900 đ" percent="-32%" />
          </View>
          <View style={{ flexDirection: "row", columnGap: 30 }}>
            <Item image={images.item5} title="Cáp chuyển từ Cổng USB sang PS2..." price="22.900 đ" percent="-22%" />
            <Item image={images.item6} title="Cáp chuyển từ Cổng USB sang PS2..." price="67.900 đ" percent="-33%" />
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          backgroundColor: "#1BA9FF",
          height: 42,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity>
          <Image source={images.list} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.home} tintColor={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.back} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screens_01;
