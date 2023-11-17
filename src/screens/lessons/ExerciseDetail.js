import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import { radialColor, radialStops } from '../../color/Color';
import { logo, Rectangle1 } from '../../assets/images/index';
import Contact from '../../components/Contact';
import { LESSON_CONTACT_1, LESSON_CONTACT_2 } from '../../constant/Message';
import { lessonStyles } from './Style';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;

class ExerciseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: 2, totalQuestion: 3 };
  }
  render() {
    const { question, totalQuestion } = this.state;
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar avatar={avatar} title={title} isAvatar={true} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Text style={styles.question}>{'Question ' + question + '/' + totalQuestion}</Text>
              <Text style={styles.titleContent}>{'Look at picture'}</Text>
              <Image source={require('../../assets/images/questions/question2.jpg')} style={styles.imageQuestion} />
              <Image source={require('../../assets/images/questions/question2.jpg')} style={styles.imageQuestion} />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: { flex: 1, paddingTop: 12, paddingBottom: 40, paddingHorizontal: 16 },
  gapHorizontal_24: {},
  gapVertical_24: {
    width: '100%',
    height: 24,
  },
  gapVertical_4: {
    width: '100%',
    height: 4,
  },
});
export default ExerciseDetail;
