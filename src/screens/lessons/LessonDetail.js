import { ImageBackground, Text, View, ScrollView, StyleSheet } from 'react-native';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import React from 'react';
import Contact from '../../components/Contact';
import { LESSON_CONTACT_1, LESSON_CONTACT_2 } from '../../constant/Message';
import { lessonStyles } from './Style';
import BannerPackage from './BannerPackage';

class LessonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, content } = this.props.route.params;
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar title={title} isAvatar={false} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={lessonStyles.content}>
              <BannerPackage isActiveButtonCTA={this.props.isActiveButtonCTA} />
              <View style={styles.info}>
                <Text style={styles.titleInfo}>Thông tin hướng dẫn</Text>
                <Text style={styles.contentInfo}>{content}</Text>
              </View>
              <View style={styles.dividerFull}></View>
              <Contact contentContact1={LESSON_CONTACT_1} contentContact2={LESSON_CONTACT_2} />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  info: { paddingBottom: 24, paddingTop: 12, marginBottom: 24 },
  titleInfo: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
    marginBottom: 16,
  },
  contentInfo: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  dividerFull: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
    marginBottom: 24,
  },
});
export default LessonDetail;
