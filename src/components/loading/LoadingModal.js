import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Portal, Modal as ModalPaper, Text } from 'react-native-paper';

class LoadingModal extends React.Component {
  constructor(props) {
    super(props);
  }
  showModal = () => {
    this.setState(() => {
      return { visible: true };
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.props;
    return (
      <Portal>
        <ModalPaper visible={visible} contentContainerStyle={styles.modalContainer}>
          <ActivityIndicator size="large" color="#1565C0" />
        </ModalPaper>
      </Portal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    bottom: 0,
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoadingModal;
