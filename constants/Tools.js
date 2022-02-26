import React, { useCallback } from 'react';
// import * as RootNavigation from '../navigation/RootNavigation';
import { TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
//Upload Image
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as CONTACTS from 'expo-contacts';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataToStorage = (name, data) => {
  AsyncStorage.setItem(name, data);
};
export const removeDataFromStorage = (name) => {
  AsyncStorage.removeItem(name);
};
export const getDataFromStorage = async (name) => {
  return await AsyncStorage.getItem(name);
};
export const OpenURL = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

//Handle Deep Link
export const urlRedirect = (url) => {
  if (!url) return;
  // parse and redirect to new url
  let { path, queryParams } = Linking.parse(url);
  // 
  //   `Linked to app with path: ${path} and data: ${JSON.stringify(
  //     queryParams
  //   )}`
  // );
  if (path) {
    // RootNavigation.navigate(path, queryParams);
  }
  return;
};

//Handle Fetching timeout
export const timeoutPromise = (url) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Timeout, Server is not responding'));
    }, 20 * 1000);
    url.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
};

export const _getContacts = async () => {
  try {
    const { status } = await CONTACTS.requestPermissionsAsync();
    if (status !== 'granted') {
      return alert('Sorry, we need camera roll permissions to make this work!');
    }
    
    const { data } = await CONTACTS.getContactsAsync({
      fields: [
        CONTACTS.Fields.Name,
        CONTACTS.Fields.PhoneNumbers,
        CONTACTS.Fields.Image,
      ],
      sort: CONTACTS.SortTypes.FirstName,
    });
    

    let result = await type;
    return result;
  } catch (E) {
    
  }
};

export const _pickImage = async (action) => {
  try {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL,
        Permissions.CAMERA
      );
      if (status !== 'granted') {
        return alert(
          'Sorry, we need camera roll permissions to make this work!'
        );
      }
    }
    const type =
      action === 'library'
        ? ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          })
        : ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          });

    let result = await type;
    return result;
  } catch (E) {
    
  }
};



//Get token from Stripe Server

export const getCreditCardToken = (creditCardData) => {
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc,
  };
  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data to Stripe
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer `,
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map((key) => key + '=' + card[key])
      .join('&'),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
