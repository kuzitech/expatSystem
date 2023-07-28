import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kuzitech.expatsystem',
  appName: 'expatSystem',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      //launchShowDuration: 3000,
      launchAutoHide: false,
      backgroundColor: "#f3f3f3",
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true
    }
  },
};

export default config;
