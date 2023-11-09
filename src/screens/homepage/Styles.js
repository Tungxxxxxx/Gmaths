import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    borderRadius: 16,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: { flex: 46 },
  navTop: {
    flex: 56,
    flexDirection: 'row',
    width: '100%',
    height: 56,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  barIcon: { margin: 8 },
  title: {
    flex: 1,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  titleContent: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
  },
  rightFunc: { marginRight: 0 },
  content: {
    flex: 710,
    width: '100%',
    paddingHorizontal: 16,
  },
  bannerContainer: {
    alignItems: 'center',
  },
  bannerHero: {
    width: bannerWidth,
    height: 335,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 16,
    shadowColor: 'rgba(25, 118, 210, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  logoContent: { alignItems: 'center', height: 56, marginBottom: 8, justifyContent: 'space-between' },
  bgLogo: { backgroundColor: '#FFFFFF', width: 32, height: 32, padding: 4, borderRadius: 16 },
  logoContentImage: { flex: 1, resizeMode: 'contain', width: 24 },
  logoText: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  txtContainer: { fontFamily: 'SF Pro', alignItems: 'center', marginBottom: 8 },
  txtSmall: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  txtLarge: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  buttonCTA: {
    width: '57%',
    height: 56,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  labelButtonCTA: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#004390',
  },
  rectangle1: {
    flex: 1,
    borderWidth: 1,
  },
  rectangle1Image: {
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
  },
  listing: {
    flex: 1,
    paddingVertical: 24,
  },
});

export const radialColor = ['rgba(66, 165, 245, 1)', 'rgba(25, 118, 210, 1)', 'rgba(21, 101, 192, 1)'];
export const radialStops = [0, 0.7419, 1];
