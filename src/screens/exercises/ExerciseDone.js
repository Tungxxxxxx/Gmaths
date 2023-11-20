import React from 'react';
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
import { lessonStyles } from '../lessons/Style';
import { GapHorizontal, GapVertical } from '../../components/GapComponent';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;
const cupImage = require('../../assets/images/cup.png');
class ExerciseDone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { question, totalQuestion, result, answerOfUser, answerList, title } = this.props.route.params;
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar title={title} isAvatar={false} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[lessonStyles.content]}>
              <View style={styles.titleContainer}>
                <Text style={styles.txtTitle}>Hooray, you've got a perfect score!!!</Text>
              </View>
              <GapVertical height={24} />
              <Image source={cupImage} style={styles.imageContent} />
              <GapVertical height={24} />
              <View style={styles.scoreContainer}>
                <Text style={styles.txtTitle}>You scored</Text>
                <Text style={styles.scoreDetail}>10/10</Text>
              </View>
              <GapVertical height={24} />
              <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.reviewButton}>
                  <Text style={styles.reviewLabel}>Review Answers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton}>
                  <Text style={styles.nextLabel}>Next Exercise</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleContainer: { alignItems: 'center' },
  txtTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  imageContent: {
    width: '100%',
    height: 219,
    resizeMode: 'contain',
  },
  scoreContainer: { alignItems: 'center', gap: 4 },
  scoreDetail: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: -0.4,
    color: '#1565C0',
  },
  actionContainer: { flexDirection: 'column', alignItems: 'center', gap: 12 },
  reviewButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#1976D2',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewLabel: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#FFFFFF',
  },
  nextLabel: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1976D2',
  },
});
export default ExerciseDone;
