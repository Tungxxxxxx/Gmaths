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
import { CORRECT, IN_CORRECT } from '../../constant/Constant';
import BannerPackage from '../lessons/BannerPackage';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;
class ExcerciseFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handlePrevious = () => {};
  handleNext = () => {};
  render() {
    const { question, totalQuestion, result, answerOfUser, answerList, title } = this.props.route.params;
    const checkResult = result === answerOfUser;
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar title={title} isAvatar={false} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={lessonStyles.content}>
              <View style={lessonStyles.answersContainer}>
                {answerList.map((answer) => {
                  return (
                    <TouchableOpacity
                      key={answer}
                      style={[
                        styles.answerButton,
                        result === answer ? styles.activeAnswer : styles.noneActiveButton,
                        answerOfUser === answer && !checkResult && styles.incorrectButton,
                      ]}
                    >
                      <Text
                        style={[
                          styles.txtAnswerButton,
                          result === answer ? styles.activeTxtAnswer : styles.noneActiveTxtAnswer,
                          answerOfUser === answer && !checkResult && styles.txtIncorrect,
                        ]}
                      >
                        {answer}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <GapVertical height={24} />
              <View style={styles.feedbacks}>
                <Text style={[styles.titleFeedbacks, checkResult ? styles.txtTitleCorrect : styles.txtTitleIncorrect]}>
                  {checkResult ? CORRECT : IN_CORRECT}
                </Text>
                <GapVertical height={8} />
                <Text style={styles.feedbacksContent}>
                  The answer is {result}. Short paragraph to describe the answer that is easy to know for kids.
                </Text>
              </View>
              <GapVertical height={24} />
              <View style={styles.section}>
                <Text style={styles.feedbacksContent}>Please watch the video lesson again</Text>
                <GapVertical height={16} />
                <BannerPackage />
              </View>
              <GapVertical height={24} />
              <View style={styles.divider}></View>
              <GapVertical height={24} />
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  style={styles.previousButton}
                  onPress={() => {
                    this.handlePrevious();
                  }}
                >
                  <Text style={styles.txtPrevious}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextButton}
                  onPress={() => {
                    this.handleNext();
                  }}
                >
                  <Text style={styles.txtNextButton}>Next</Text>
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
  answerButton: {
    width: '31.78%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  txtAnswerButton: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  activeTxtAnswer: { color: '#FFFFFF' },
  noneActiveTxtAnswer: { color: '#000000' },
  activeAnswer: {
    backgroundColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowColor: 'rgba(25, 118, 210, 0.3)',
    backgroundColor: '#1976D2',
  },
  noneActiveButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  incorrectButton: { borderWidth: 1, borderColor: 'rgba(255, 59, 48, 0.8)' },
  txtIncorrect: { color: 'rgba(255, 59, 48, 0.8)' },
  divider: { width: '100%', height: 1, backgroundColor: 'rgba(60, 60, 67, 0.18)' },
  titleFeedbacks: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  txtTitleCorrect: {
    color: 'green',
  },
  txtTitleIncorrect: { color: '#FF3B30' },
  feedbacksContent: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previousButton: {
    width: '48.25%',
    height: 48,
    backgroundColor: 'transparent',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nextButton: {
    width: '48.25%',
    height: 48,
    backgroundColor: '#1976D2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPrevious: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#1976D2',
    letterSpacing: -0.4,
    paddingLeft: 16,
  },
  txtNextButton: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    letterSpacing: -0.4,
  },
});
export default ExcerciseFeedback;
