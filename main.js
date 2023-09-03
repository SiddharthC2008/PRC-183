import {StatusBar } from "expo-status-bar"; import React, { Component } from "react"; import {
StyleSheet,
Text,
View,
SafeAreaView,
Platform,
Image,
ScrollView,
TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import as FaceDetector from "expo-face-detector";

import { StatusBar } from "expo-status-bar"; 
import React, { Component } from "react"; 
import {
StyleSheet,
Text,
View,
SafeAreaView,
Platform,
Image,
ScrollView,
TouchableOpacity
} from "react-native";
import Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default class Main extends Component {
constructor(props) {
}
super(props);
this.state = {
};
hasCameraPermission: null,
faces: []
this.onFaces Detected = this.onFaces Detected.bind(this);


async componentDidMount() {
}
const { status } = await Camera.requestPermissionsAsync(); this.setState({ hasCameraPermission: status
"granted"});

const data =
[
{ id: "crown-pic1", src: require("../assets/crown-pic1.png") }, 
{ id: "crown-pic2", src: require("../assets/crown-pic2.png") }, 
{ id: "crown-pic3", src: require("../assets/crown-pic3.png") }, 
{ id: "flower-pic1", src: require("../assets/flower-pic1.png") }, 
{ id: "flower-pic2", src: require("../assets/flower-pic2.png") }
];

onFacesDetected({ faces }) { this.setState({ faces: faces });
}


<View style={styles.middleContainer}>
<Camera
/>
style={{ flex: 1 }} type={Camera.Constants.Type.front}
faceDetectorSettings={{
}}
mode: FaceDetector.Constants.Mode.fast,
detectLandmarks: FaceDetector.Constants.Landmarks.all,
runClassifications: FaceDetector.Constants.Classifications.all
onFacesDetected={this.on FacesDetected}
onFacesDetectionError={this.on Faces DetectionError}
</View>