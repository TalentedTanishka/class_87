import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};



export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage:"image_1",
      dropDownHeight:40
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

   render()
    {
        if(!this.state.fontsLoaded){
            return <AppLoading />
        }
        else{
            let preview_images = {
                image_1 : require("../assets/story_image_1.png"),
                image_2 : require("../assets/story_image_2.png"),
                image_3 : require("../assets/story_image_3.png"),
                image_4 : require("../assets/story_image_4.png"),
                image_5 : require("../assets/story_image_5.png"),
            }
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.AppTitle}>
                        <View style={styles.AppIcon}>
                            <Image 
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                            >
                                </Image>
                        </View>
                        <View style={styles.AppTitleTextContainer}>
                            <Text style={styles.AppTitleText}>
                                New Story
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.fieldsContainer}>
                        <ScrollView>
                            <Image
                            source={preview_images[this.state.previewImage]}
                            ></Image>
                            <View style={{height:RFValue(this.state.dropDownHeight)}}>
                                <DropDownPicker 
                                items={[
                                    {label:'image1',value:'image_1'},
                                    {label:'image2',value:'image_2'},
                                    {label:'image3',value:'image_3'},
                                    {label:'image4',value:'image_4'},
                                    {label:'image5',value:'image_5'},
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height:40,
                                    borderRadius:20,
                                    marginBottom:10
                                }}
                                onOpen={()=>{
                                    this.setState({
                                        dropDownHeight:170
                                    });
                                }}
                                onClose={()=>{
                                    this.setState({
                                        dropDownHeight:40
                                    });
                                }}
                                style={{backgroundColor:"transperent"}}
                                itemStyle={{justifyContent:"flex-start"}}
                                dropDownStyle={{backgroundColor:"#2f345d"}}
                                labelStyle={{color:"white" , fontFamily:"Bubblegum-Sams"}}
                                arrowStyle={{color:"white" , fontFamily:"Bubblegum-Sams"}}
                                onChangeItem={item =>
                                this.setState({
                                   previewImage:item.value
                                })
                            }

                              />

                                
                            </View>
                            <TextInput
                            style={styles.InputFont}
                            onChangeText={title=>this.setState({
                                title
                            })}
                            placeholder={"Title"}
                            placeholderTextColor="white"
                            />

<TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={description => this.setState({ description })}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />

<TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={story => this.setState({ story })}
                placeholder={"Story"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={moral => this.setState({ moral })}
                placeholder={"Moral of the story"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />

                          
                        </ScrollView>
                        <View>
                        <View style={{ flex: 0.08 }} />
                        </View>
                    </View>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    }
  });