import PropTypes from "prop-types";
import React, { useState } from "react";
import { useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Toast from "react-native-toast-message";

import { login } from "../../../api/auth";
import AppStyles from "../../../assets/global-css/AppStyles";
import Apple from "../../../assets/svgs/SocialIcons/apple.svg";
import Facebook from "../../../assets/svgs/SocialIcons/facebook.svg";
import Google from "../../../assets/svgs/SocialIcons/google.svg";
import storage from "../../../auth/storage";
import useAuth from "../../../auth/useAuth";
import { loginValidationSchema } from "../../../utils/validationSchemas/validationSchemas";
import CustomCheckbox from "../General/CustomCheckbox";
import GenericButton from "../General/GenericButton";
import styles from "./LoginForm.style";

const LoginForm = () => {
  const { navigate } = useNavigation();
  const {
    logInWithUser,
    logInWithOutUser,
    saveBiometricData,
    getBioMetricData,
    setIsBioEnabled,
    getIsBioEnabled,
  } = useAuth();

  const [hidePass, setHidePass] = useState(true);
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      if (values.rememberMe) {
        saveBiometricData({ email: values.email, password: values.password });
        setIsBioEnabled("ENABLED");
      } else {
        setIsBioEnabled("NOT-ENABLED");
      }
      delete values["rememberMe"];
      await login(values)
        .then(async (res) => {
          if (res?.user?.is_completed) {
            logInWithUser(res);
            await storage.storeFirstTimeLaunch("true");
          } else {
            logInWithOutUser(res);
            await storage.storeFirstTimeLaunch("true");

            navigate(res?.user?.question?.question_type, {
              questionTitle: res?.user?.question?.title,
              answers: res?.user?.question?.answers.map((data) => {
                return {
                  label: data.attributes.body,
                  answer_id: data.attributes.id,
                };
              }),
            });
          }
        })
        .catch((err) => {
          Toast.show({
            type: "error",
            text1: err.errors[0]?.title,
          });
        });
    },
  });

  const getData = async () => {
    try {
      const value = await getIsBioEnabled();

      if (value === "ENABLED") {
        const { email, password } = JSON.parse(await getBioMetricData());

        formik.setFieldValue("email", email);
        formik.setFieldValue("password", password);
        formik.setFieldValue("rememberMe", true);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Toast />
      <View style={styles.BrowseText}>
        <TouchableOpacity onPress={() => navigate("Home-OnBoarding")}>
          <Text style={styles.browseText}>Just Browse</Text>
        </TouchableOpacity>
      </View>
      <View style={AppStyles.layout.subContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.welcomeText}>
            <Text style={AppStyles.font.heading}>Welcome Back!</Text>
            <Text style={styles.text}>
              “Despite all our accomplishments we owe our existence to a
              six-inch layer of topsoil and the fact that it rains”
            </Text>
          </View>
          <TextInput
            style={AppStyles.input}
            placeholder="Email"
            type="text"
            variant="outline"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            defaultValue=""
          />
          {formik.errors.email && (
            <Text style={AppStyles.font.errorText}>{formik.errors.email}</Text>
          )}
          <View style={styles.passwordContainer}>
            <TextInput
              style={AppStyles.input}
              placeholder="Password"
              type="text"
              secureTextEntry={hidePass}
              variant="outline"
              value={formik.values.password}
              onChangeText={formik.handleChange("password")}
              defaultValue=""
            />

            <Ionicons
              name={hidePass ? "eye-off-sharp" : "eye"}
              size={heightPercentageToDP("2.5%")}
              style={styles.passwordIcon}
              color={AppStyles.color.secondary}
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          {formik.errors.password && (
            <Text style={AppStyles.font.errorText}>
              {formik.errors.password}
            </Text>
          )}
          <View style={styles.forgotContainer}>
            <View style={styles.checkboxContainer}>
              <CustomCheckbox
                checked={formik.values.rememberMe}
                onPress={() =>
                  formik.setFieldValue("rememberMe", !formik.values.rememberMe)
                }
              />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <Text
              onPress={() => navigate("Forget-Password-Screen")}
              style={styles.rememberText}>
              Forgot Password?
            </Text>
          </View>

          <GenericButton
            onPress={formik.handleSubmit}
            type={"solid"}
            text={"Login"}
            isSubmitting={formik.isSubmitting}
          />

          <View style={styles.signUpText}>
            <Text style={styles.accountText}>Dont Have An Account? </Text>
            <TouchableOpacity onPress={() => navigate("Account-Type-Screen")}>
              <Text style={styles.titleText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.accountText}> OR </Text>

          <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
              <Facebook marginLeft={12} marginRight={18} />
              <Text style={styles.iconText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Google marginTop={12} />
              <Text style={styles.iconText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Apple marginTop={5} />
              <Text style={styles.iconText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object,
};
export default LoginForm;
