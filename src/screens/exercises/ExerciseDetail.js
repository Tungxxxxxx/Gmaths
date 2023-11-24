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
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;

const question1 = require('../../assets/images/questions/question1.jpg');
const question2 = require('../../assets/images/questions/question2.jpg');
const question3 = require('../../assets/images/questions/question3.png');
class ExerciseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      answers: [
        { question: 1, answerList: [34, 12, 57, 23, 44, 55], result: 57, image: question1 },
        { question: 2, answerList: [1, 2, 3, 4, 5, 6], result: 4, image: question2 },
        { question: 3, answerList: [22, 5, 8, 2, 6, 1], result: 6, image: question3 },
      ],
      answersOfUser: [
        { question: 1, answerOfUser: null },
        { question: 2, answerOfUser: null },
        { question: 3, answerOfUser: null },
      ],
    };
  }
  handleSelectAnswer = (answer, question) => {
    const answersOfUserCopy = [...this.state.answersOfUser];
    const index = answersOfUserCopy.findIndex((item) => item.question === question);
    answersOfUserCopy[index].answerOfUser = answer;
    this.setState({
      answersOfUser: answersOfUserCopy,
    });
  };
  checkResultAll = () => {
    const { question, answers, answersOfUser } = this.state;
    for (let i = 0; i < answersOfUser.length; i++) {
      for (let j = 0; j < answers.length; j++) {
        if (answersOfUser[i].question === answers[j].question && answersOfUser[i].answerOfUser !== answers[j].result) {
          return false;
        }
      }
    }
    return true;
  };
  getAnswerUserByQuestion = (question, answersOfUser) => {
    return answersOfUser.filter((item) => item.question === question)[0].answerOfUser;
  };
  getAnswerByQuestion = (question) => {
    const { answers } = this.state;
    return answers.filter((item) => item.question === question)[0];
  };
  handleNext = () => {
    const { question, answers, answersOfUser } = this.state;
    const answer = this.getAnswerByQuestion(question);
    const totalQuestion = answers.length;
    const result = answer.result;
    const answerList = answer.answerList;
    const answerOfUser = answersOfUser.filter((item) => item.question === question)[0].answerOfUser;
    const params = {
      question: question,
      totalQuestion: totalQuestion,
      result: result,
      answerOfUser: answerOfUser,
      answerList: answerList,
      title: this.props.route.params.title,
    };
    if (!this.checkResultAll()) {
      if (answerOfUser && answerOfUser !== result) {
        this.props.navigation.navigate('ExcerciseFeedback', params);
      } else {
        const { answers, question } = this.state;
        const totalQuestion = answers.length;
        if (question < totalQuestion) {
          this.setState((prevState) => {
            return { question: prevState.question + 1 };
          });
        }
      }
    } else {
      if (question < totalQuestion) {
        this.setState((prevState) => {
          return { question: prevState.question + 1 };
        });
      } else {
        this.props.navigation.navigate('ExerciseDone', params);
      }
    }
  };
  handlePrevious = () => {
    const { question } = this.state;
    if (question > 1) {
      this.setState((prevState) => {
        return { question: prevState.question - 1 };
      });
    }
    return;
  };
  countAnswersOfUser = (answersOfUser) => {
    let count = 0;
    if (answersOfUser) {
      answersOfUser.forEach((element) => {
        if (element.answerOfUser) {
          count++;
        }
      });
    }
    return count;
  };
  render() {
    const { question, answers, answersOfUser } = this.state;
    const answer = this.getAnswerByQuestion(question);
    const answerOfUser = this.getAnswerUserByQuestion(question, answersOfUser);

    const { title, isTestOnline } = this.props.route.params;
    console.log('question', question);
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar title={title} isAvatar={false} />
          {isTestOnline && (
            <View style={styles.progressBar}>
              <Progress.Bar
                progress={this.countAnswersOfUser(answersOfUser) / answers.length}
                width={bannerWidth}
                borderWidth={0}
                height={8}
                color="#FF9500"
                unfilledColor="rgba(21, 101, 192, 0.3)"
                borderRadius={8}
              />
            </View>
          )}

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={lessonStyles.content}>
              <View style={styles.quiz}>
                <Text style={styles.question}>{'Question ' + question + '/' + answers.length}</Text>
                <GapVertical height={4} />
                <Text style={styles.titleContent}>{'Look at picture'}</Text>
                <GapVertical height={24} />
                <View>
                  <Image source={answer.image} style={styles.imageQuestion} />
                </View>
                <GapVertical height={24} />
                <Text style={styles.txtQuizContent}>
                  Choose the shape that is fixable the blank. Please choose below.
                </Text>
              </View>
              <GapVertical height={24} />
              <View style={lessonStyles.answersContainer}>
                {answer.answerList.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      style={[
                        styles.answerButton,
                        answerOfUser && answerOfUser === item ? styles.activeAnswer : styles.noneActiveButton,
                      ]}
                      onPress={() => {
                        this.handleSelectAnswer(item, question);
                      }}
                    >
                      <Text
                        style={[
                          styles.txtAnswerButton,
                          answerOfUser && answerOfUser === item ? styles.activeTxtAnswer : styles.noneActiveTxtAnswer,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <GapVertical height={24} />
              <View style={styles.divider} />
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
                    this.handleNext(answerOfUser);
                  }}
                >
                  <Text style={styles.txtNextButton}>Next/Finish</Text>
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
  progressBar: { width: '100%', paddingHorizontal: 16 },
  question: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(60, 60, 67, 0.6)',
    letterSpacing: -0.4,
  },
  titleContent: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: '#22313F',
    letterSpacing: -0.4,
  },
  imageQuestion: { width: '100%', height: 274, resizeMode: 'stretch' },
  txtQuizContent: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#22313F',
    letterSpacing: -0.4,
  },

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
  divider: { width: '100%', height: 1, backgroundColor: 'rgba(60, 60, 67, 0.18)' },
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
const mapStateToProps = (state) => {
  return { navigation: state.params.navigation };
};
export default connect(mapStateToProps, null)(ExerciseDetail);
