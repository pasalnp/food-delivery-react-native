import 'dotenv/config';

export default {
  expo: {
    name: 'food-delivery',
    slug: 'food-delivery',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icons/icon.png',
    splash: {
      image: './assets/icons/chef.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/icons/icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/icons/fries.png'
    },
    extra: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    }
  }
};