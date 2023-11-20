import { StyleSheet } from 'react-native';
export const lessonStyles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: { flex: 1, paddingTop: 12, paddingBottom: 40, paddingHorizontal: 16 },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
});
