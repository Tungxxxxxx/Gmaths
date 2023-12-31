import { ActivityIndicator, View } from 'react-native';
export default function Loading() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 300,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        zIndex: 99999,
      }}
    >
      <ActivityIndicator size="large" color="#1565C0" />
    </View>
  );
}
