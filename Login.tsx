import React, { useState, createRef, useEffect, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Platform,
  Button,
  Alert,
  Pressable,
} from "react-native";

function Login() {
  const [contact, setContact] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [imageHiddenStatus, setImageHiddenStatus] = useState(false);

  const doSignIn = () => {
    const ip = "192.168.56.1";
    let url = `http://${ip}:80/react_native_backend/login.php`;

    url = "https://ragjn.000webhostapp.com/signin.php";
    const formData = new FormData();
    formData.append("contact", contact);
    formData.append("password", password);
    Alert.alert("Contact is ",contact)
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((text) => {
        console.log("text is ", text);
        setContact("");
        setPassword("");
      });
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
      >
        <View style={style.container}>
          <Image
            style={style.image}
            source={require("./assets/images/login.png")}
          />
          <View style={style.contentContainer}>
            <View style={style.headerContainer}>
              <Text style={style.textHeader}>Sign In</Text>
            </View>
            <View style={style.formContainer}>
              <View style={style.textInputPair}>
                <Text style={style.textLabel}>Mobile</Text>
                <TextInput
                  keyboardType="numeric"
                  inputMode="numeric"
                  onChangeText={(value) => {
                    setContact(value);
                  }}
                  style={style.textInput}
                  value={contact}
                />
              </View>

              <View style={style.textInputPair}>
                <Text style={style.textLabel}>Password</Text>
                <TextInput
                  onChangeText={(value) => {
                    setPassword(value);
                  }}
                  style={style.textInput}
                  value={password}
                />
              </View>

              <View style={style.textInputPair}>
                <Pressable
                  style={style.btnContainer}
                  onPress={() => {
                    doSignIn();
                  }}
                >
                  <Text style={style.btnText}>Log In</Text>
                </Pressable>
              </View>
              <View style={style.textInputPair}>
                <Pressable onPress={() => {}}>
                  <Text style={style.loginLabel}>Sign Up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default Login;
const style = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  imageHidden: {
    display: "none",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    // backgroundColor:"green"
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    width: "100%",
  },
  headerContainer: {
    paddingTop: 25,
    marginTop: -20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
    // backgroundColor: "green",
  },
  headerContainerTopped: {
    paddingTop: 25,
    marginTop: 40,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
    // backgroundColor: "green",
  },
  formContainer: {
    // backgroundColor:"white",
    paddingTop: 15,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginTop:-20
  },
  formContainerTopped: {
    marginTop: -25,
  },
  topped: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    width: "100%",
    marginTop: -120,
  },

  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  textInputPair: {
    paddingTop: 10,
  },
  textLabel: {
    fontSize: 18,
  },
  textInput: {
    width: 250,
    fontSize: 16,
    // height:35,
    // backgroundColor:"yellow",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 5,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    // borderColor:"blue"
  },
  dropDown: {
    borderRadius: 4,
    padding: 5,
    borderWidth: 1,
    width: 250,
    borderColor: "#D3D3D3",
  },
  dropDownText: {
    fontSize: 14,
  },
  btnContainer: {
    backgroundColor: "#24a0ed",
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    width: 250,
    color: "white",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "700",
  },
  loginLabel: {
    textDecorationLine: "underline",
    color: "blue",
  },
});
