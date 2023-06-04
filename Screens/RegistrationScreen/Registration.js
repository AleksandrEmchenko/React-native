import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function Registration() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const navigation = useNavigation();

  // const [dimensions, setDimensions] = useState(Dimensions.get('window').width -20 *2);

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width;
  //     Dimensions.addEventListener("change", onChange);
  //     setDimensions(width);

  //     return () => {
  //       Dimensions.removeEventListener("change", onChange);
  //     };
  //   };

  // }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    setState(initialState);
  };

  const image = require("../../assets/images/Photo_BG.png");
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 5 : 0 }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.photoRec}>
                <ImageBackground
                  style={styles.userIcon}
                  source={require("../../assets/images/user.png")}
                >
                  <Image
                    source={require("../../assets/images/add.png")}
                    style={styles.add}
                  />
                </ImageBackground>
              </View>

              <Text style={styles.regText}>Реєстрація</Text>

              <View style={styles.formReg}>
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  value={state.login}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                ></TextInput>

                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  value={state.email}
                  keyboardType="email-address"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                ></TextInput>

                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    value={state.password}
                    secureTextEntry={true}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  ></TextInput>

                  <Text style={styles.textInput}>Показати</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonText}>Зареєструватися</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate("Login", { emailInputText: state.email })
                }
              >
                <Text style={styles.textWelcome}>
                  Вже є акаунт? <Text>Увійти</Text>
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    height: 549,
    backgroundColor: "#ffffff",
    top: 50,
    borderRadius: 20,
    width: "100%",
    // marginBottom: 0,
  },
  photoRec: {
    position: "absolute",
    width: 120,
    height: 120,
    left: 137,
    // transform: [{translateX: "-50%"}, {translateY: "-50%"}],
    top: -60,
    justifyContent: "center",
    alignItems: "center",
    border: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  userIcon: {
    width: 120,
    height: 120,
  },
  add: {
    position: "absolute",
    width: 25,
    height: 25,
    left: "90%",
    top: "65%",
  },
  regText: {
    color: "#212121",
    fontSize: 30,
    letterSpacing: 0.01,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 92,
    marginBottom: 32,
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    paddingLeft: 15,
    fontSize: 16,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  textInput: {
    position: "absolute",
    right: 35,
    fontSize: 16,
    top: 12,
    color: "#1B4371",
  },
  button: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  textWelcome: {
    marginHorizontal: 100,
    color: "#1B4371",
    fontSize: 16,
  },
});
