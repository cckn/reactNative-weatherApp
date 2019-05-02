import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00c6FB", "#0058ea"],
    title: "추적추적",
    subtitle: "하정우",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["#FCE248", "#EF6001"],
    title: "맑음😀",
    subtitle: "썬크림 필수",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#12FBB8", "#0F64C9"],
    title: "천둥번개",
    subtitle: "밖에 나가 너의 운을 시험해봐",
    icon: "weather-lightning"

  },
  Clouds: {
    colors: ["#CCC3CB", "#2D3B49"],
    title: "구름",
    subtitle: "구름이 구름구름",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#79DFFA", "#283346"],
    title: "눈에는 눈",
    subtitle: "우서 : 명예롭게 싸우리라",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#82FDFD", "#82FDFD"],
    title: "이슬비",
    subtitle: "이슬이슬참이슬",
    icon: "weather-rainy"
  },

  Mist: {
    colors: ["#FFFFFF", "#283346"],
    title: "안개",
    subtitle: "네가 안뵈",
    icon: "weather-fog"
  }
};

export default function Weather({ temperature, weatherName }) {
  // console.log(weatherCases[weatherName]);

  const weather = weatherCases[weatherName];
  return (
    <LinearGradient colors={weather.colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weather.icon} style={styles.icon} />
        <Text style={styles.temp}>
          {Math.floor((temperature - 273.15) * 10) / 10}℃
        </Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weather.title}</Text>
        <Text style={styles.subtitle}>{weather.subtitle} </Text>
      </View>
    </LinearGradient>
  );
}

Weather.prototype = {
  temperature: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon:{
    marginTop:100
  },
  temp: {
    fontSize: 48,
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: "white",
    marginBottom: 24
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    marginBottom: 100
  }
});
