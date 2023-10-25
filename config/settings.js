const settings = {
  dev: {
    apiUrl: "https://now-we-play-backendapi.herokuapp.com/api/v1",
  },
  local: {
    apiUrl: "http://192.168.0.181:3000/api/v1",
  },
  staging: {
    apiUrl: "https://soilhealth.agiledistrictteam.com/api/v1/",
  },
};

const getCurrentSettings = () => {
  return settings.staging;
};

export default getCurrentSettings();
