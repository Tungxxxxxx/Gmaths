import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { URI_FB_LOGIN } from '../../constant/Constant';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const titleWidth = width - 52 - 56;

class FBLogin extends Component {
  onFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          console.log('Logged in:', data.accessToken);
          // Gọi hàm xử lý sau khi đăng nhập thành công
        }
      }
    } catch (error) {
      console.error('Facebook login error:', error);
    }
  };

  render() {
    return (
      <View style={styles.contentContainer}>
        <WebView
          style={styles.webView}
          source={{ uri: URI_FB_LOGIN }}
          // onNavigationStateChange={(navState) => {
          //   this.handleUrlChange(navState);
          // }}
        />
        {/* <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.error('Facebook login error:', error);
            } else if (result.isCancelled) {
              console.log('Login cancelled');
            } else {
              this.onFacebookLogin();
            }
          }}
          onLogoutFinished={() => console.log('User logged out')}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flex: 1, width: '100%', paddingTop: 12 },
  webView: {
    flex: 1,
    width: '100%',
  },
  barContainer: {
    height: 56,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 14,
    // gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: { color: '#1565C0' },
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  title: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
    width: titleWidth,
    overflow: 'hidden',
  },
});
export default FBLogin;
