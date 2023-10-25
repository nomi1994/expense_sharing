import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const AppStyles = {
  color: {
    background: "#E5E5E5",
    secondaryFont: "#8A94A4",
    primary: "#1B152E",
    secondary: "#8A94A4",
    green: "#00AC63",
    red: "#FA2123",
    black: "#000",
    white: "#FFFFFF",
    lightgrayBackground: "#EDEBEB",
    gray: "#686868",
    yellow: "#FFC200",
    lightGray: "#292B23",
  },

  font: {
    Bold18: {
      flexWrap: "wrap",
      fontSize: 20,
      marginVertical: 10,
      fontStyle: "normal",
      fontWeight: "700",
    },
    errorText: {
      color: "red",
      fontSize: heightPercentageToDP("1.5"),
      width: widthPercentageToDP(88),
    },
    heading: {
      color: "#1B152E",
      fontFamily: "RobotoBlack",
      fontSize: heightPercentageToDP(2.5),
      fontWeight: "700",
      textAlign: "center",
    },

    Regular: "RobotoRegular",
    Bold: "RobotoBold",
  },

  card: {
    cardBody: {
      alignItems: "center",
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "700",
    },

    cardHeading: {
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: "600",
    },
  },

  input: {
    borderColor: "#E8E8EA",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: heightPercentageToDP(2.4),
    height: 48,
    justifyContent: "flex-end",
    margin: 12,
    paddingLeft: 20,
    width: widthPercentageToDP(90),
  },
  button: {
    outline: {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      marginVertical: 10,
      height: 60,
      borderWidth: 1,
      justifyContent: "center",
      width: widthPercentageToDP(90),
    },
    outlineText: {
      color: "#1B152E",
      fontFamily: "RobotoRegular",
      fontSize: 20,
    },

    solid: {
      alignItems: "center",
      backgroundColor: "#1B152E",
      borderRadius: 12,
      color: "#FFFFFF",
      height: 60,
      justifyContent: "center",
      width: widthPercentageToDP(90),
    },
    solidText: {
      fontFamily: "RobotoRegular",
      fontSize: 20,
      color: "#FFFFFF",
    },
    postOutlineButton: {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      height: 50,
      justifyContent: "center",
      marginHorizontal: widthPercentageToDP(5),
      marginVertical: heightPercentageToDP(2),
      width: widthPercentageToDP(30),
    },
    postOutlineText: {
      color: "#1B152E",
      fontFamily: "RobotoBlack",
      fontSize: 18,
    },
    postSolid: {
      alignItems: "center",
      backgroundColor: "#1B152E",
      borderRadius: 12,
      color: "#FFFFFF",
      height: 50,
      justifyContent: "center",
      marginHorizontal: widthPercentageToDP(5),
      marginVertical: heightPercentageToDP(2),
      width: widthPercentageToDP(30),
    },
  },
  profilePictureContainer: {
    position: "absolute",
    left: 10,
    top: 165,
    width: 90,
    height: 90,
    borderRadius: 35,
  },

  layout: {
    subContainer: {
      width: widthPercentageToDP(100),
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    mainContainer: {
      height: heightPercentageToDP(100),
      alignItems: "center",
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: "#ffffff",
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
    },

    flexCenter: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flex: 1,
    },
  },
};

export default AppStyles;
