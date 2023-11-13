import React from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SvgXml } from 'react-native-svg';
import { zaloIcon, messenger, phone, logo } from '../../assets/images/index';
import { Dimensions } from 'react-native';
import { MOBI, VINA } from '../../constant/Constant';
const { width } = Dimensions.get('window');
const contentWidth = width - 64;
class BuyCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, activeButtonCTA: MOBI };
  }
  showModal = () => {
    this.setState((prevState) => {
      return { visible: true };
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  handleMobiClick = () => {
    this.setState({
      activeButtonCTA: MOBI,
    });
  };
  handleVinaClick = () => {
    this.setState({
      activeButtonCTA: VINA,
    });
  };
  render() {
    const { visible, activeButtonCTA } = this.state;
    return (
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <View style={styles.modalContainer}>
            <View style={styles.grabber}></View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Đăng ký</Text>
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={() => {
                  this.closeModal();
                }}
              >
                <AntDesign name="left" size={16} style={styles.close} />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <View style={styles.logoView}>
                <Image source={logo} style={{ width: 80, height: 80 }} />
                <Text style={styles.logoTitle}>GMATHS EDUCATION</Text>
              </View>
              <View style={styles.buttonCTAsContainer}>
                <TouchableOpacity
                  style={[styles.buttonCTA, activeButtonCTA === MOBI && styles.activeButtonCTA]}
                  onPress={() => {
                    this.handleMobiClick();
                  }}
                >
                  <Text style={[styles.txtButtonCTA, activeButtonCTA === MOBI && styles.activeTxtButtonCTA]}>
                    mobifone
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonCTA, activeButtonCTA === VINA && styles.activeButtonCTA]}
                  onPress={() => {
                    this.handleVinaClick();
                  }}
                >
                  <Text style={[styles.txtButtonCTA, activeButtonCTA === VINA && styles.activeTxtButtonCTA]}>
                    vinaphone
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listing}>
                <FlatList />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, borderWidth: 1 },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: '88%',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 247, 1)',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: 'rgba(0, 0, 0, 1)',
  },
  closeContainer: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 16, fontSize: 16, color: 'rgba(0, 0, 0, 1)' },
  grabber: { width: '11.58%', height: 5, backgroundColor: 'rgba(60, 60, 67, 0.3)', borderRadius: 100, top: 5 },
  content: { width: '100%', flex: 1, paddingHorizontal: 32, paddingTop: 24, alignItems: 'center' },
  logoView: { width: '100%', height: 116, alignItems: 'center', marginBottom: 24 },
  logoTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1565C0',
    marginTop: 12,
  },
  buttonCTAsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    gap: 8,
  },
  buttonCTA: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    gap: 4,
  },

  txtButtonCTA: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: -0.4,
    color: '#42A5F5',
  },
  activeTxtButtonCTA: {
    color: '#FFFFFF',
  },
  activeButtonCTA: {
    backgroundColor: '#1976D2',
  },
  listing: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
});
export default BuyCourse;
