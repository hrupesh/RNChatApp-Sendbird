import AsyncStorage from '@react-native-async-storage/async-storage';
import {useConnection} from '@sendbird/uikit-react-native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import uuid from 'react-native-uuid';

export const HomeScreen: React.FC = () => {
  const {connect} = useConnection();
  const [userId, setUserId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUserID = async () => {
    const USER_ID = await AsyncStorage.getItem('USER_ID');
    if (!USER_ID) {
      const uniqueId = uuid.v4().toString();
      await AsyncStorage.setItem('USER_ID', uniqueId);
      setUserId(uniqueId);
    } else {
      setUserId(USER_ID);
    }
  };

  useEffect(() => {
    fetchUserID();
  }, []);

  const handlePress = () => {
    setIsLoading(true);
    connect(userId, {nickname: userId});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {'Click Below to Chat with our customer support'}
      </Text>
      <Pressable
        disabled={isLoading}
        style={styles.button}
        onPress={handlePress}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'#000'} />
        ) : (
          <Text style={styles.buttonText}>{'CONTACT US'}</Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.4,
    lineHeight: 22,
    color: '#222',
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 50,
  },
  button: {
    backgroundColor: '#a7f',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#222',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    letterSpacing: 0.2,
  },
});
