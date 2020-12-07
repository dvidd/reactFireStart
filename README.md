# reactFireStart

React firebase Auth Started Kit because it seems nobody have done this before, this uses the Expo bare manage for using the native firebase libary, it also have an nice UX for login and register 

<img src="https://github.com/dvidd/reactFireStart/blob/master/reactstart.png?raw=true">

### if you like follow me in twitter if you want <a href="twitter.com/dviddb"> @dvidd </a>  or star the project

## Setup envioriment :

First you have to setup the project in the platform that you are going to use and do the configuration that needs.

<b>First</b> ---> <a href="https://rnfirebase.io/"> Do this steps </a>

You have to add your own Google Service Info.plist file Using Xcode If you are doing it for Ios

Once that you have make that you can run using :

```
=== With yarn ===

$ yarn add

$ cd /ios 
$ cd ..
$ pod install 

$ yarn ios 

<b>Android<b>

$ yarn android

=== With npm ===

$ npm i 

$ npm start ios
$ npm start android




```

## To create this project :

- Expo init 
- Install navigator and their things :
````shell
yarn add @react-navigation/native

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

yarn add @react-navigation/stack

cd ios/ && pod install
````
- Install firebase 
````shell
yarn add @react-native-firebase/app
cd ios/ && pod install
````
- Add the delegate file and config in  AppDelegate.h
````swift
#import <Firebase.h>

if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
````
- Install auth with firebase && pod install that
````shell 
yarn add @react-native-firebase/auth
cd ios/ && pod install
````
- Install the keyboard scroll component
````shell 
yarn add react-native-keyboard-aware-scroll-view
cd ios/ && pod install
`````
- Todo google sign in, first install dependency for google-sign, and set the reverse id in the url scheme in the project in Xcode
````shell 
yarn add @react-native-community/google-signin
cd ios / && pod install
````

Thanks to @amanmittal I use some of the code for the navigatioon workflow
