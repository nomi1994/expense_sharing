import React from "react";
import { SafeAreaView } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppStyles from "../../../assets/global-css/AppStyles";
import LoginForm from "../../components/AuthScreens/LoginForm";

const LoginScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={AppStyles.layout.mainContainer}>
        <LoginForm />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
