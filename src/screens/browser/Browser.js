import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GapHorizontal, GapVertical } from '../../components/GapComponent';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const titleWidth = width - 52 - 56;
// import Ionicons from 'react-native-vector-icons/Ionicons';

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUrl: '', error: '' };
  }
  handleBack = () => {
    const { navigation, callBack } = this.props;
    navigation.goBack();
    callBack();
  };
  handleUrlChange = (navState) => {
    this.setState({
      currentUrl: navState.url,
    });
  };
  handleLoadError = (syntheticEvent) => {
    console.log(syntheticEvent);
    this.setState({
      error: syntheticEvent.nativeEvent.description,
    });
  };
  render() {
    const uri = this.props.route.params.uri;
    const { currentUrl, error } = this.state;
    console.log('currentUrl:', currentUrl);
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
        <GapVertical height={26} />
        <View style={styles.barContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleBack();
              }}
            >
              <Ionicons name="chevron-back-sharp" style={styles.backIcon} size={24} />
            </TouchableOpacity>
            <GapHorizontal width={8} />
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {currentUrl}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <WebView
            style={styles.webView}
            source={{ uri: uri }}
            onNavigationStateChange={(navState) => {
              this.handleUrlChange(navState);
            }}
            // onError={(syntheticEvent) => {
            //   this.handleLoadError(syntheticEvent);
            // }}
            onHttpError={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              console.log('WebView received error status code: ', nativeEvent.statusCode);
            }}
            renderError={(errorName) => <Error name={errorName} />}
            onError={(error) => console.error('WebView error:', error)}
          />
        </View>
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
const mapStateToProps = (state) => {
  return { navigation: state.params.navigation, callBack: state.params.callBack };
};
export default connect(mapStateToProps)(Browser);
