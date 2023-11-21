import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', width: '100%' },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '88%',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 247, 1)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  grabber: { width: '11.58%', height: 5, backgroundColor: 'rgba(60, 60, 67, 0.3)', borderRadius: 100, top: 5 },
  content: { width: '100%', flex: 1, paddingHorizontal: 32, paddingTop: 24, alignItems: 'center' },
  logoView: { width: '100%', height: 116, alignItems: 'center', marginBottom: 24 },
  logoImage: { width: 80, height: 80 },
  logoTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1565C0',
    marginTop: 12,
  },
  closeContainer: {
    position: 'absolute',
    top: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 16, fontSize: 16, color: 'rgba(0, 0, 0, 1)' },
  form: {
    width: '100%',
    alignItems: 'center',
  },

  buttonContainer: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },

  txtButton: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#FFFFFF',
  },
  links: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  forgetPass: {
    textDecorationLine: 'underline',
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1565C0',
    textAlign: 'center',
  },
  txtLink: {
    textDecorationLine: 'underline',
  },
  divider: {
    width: '42.44%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
  },
  dividerFull: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
    marginBottom: 24,
  },
});
