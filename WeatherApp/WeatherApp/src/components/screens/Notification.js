import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Notification = () => {
  const notificationData = [
    {
      id: 1,
      icon: require('../../assets/images/lighting.png'),
      title: 'A Storm is approaching!',
      description:
        'A high frequency storm is likely to approach your city with a magnitude of 6.0. it is likely to deal damage to weak structures. Please stay safe indoor or under shelter',
    },
    {
      id: 2,
      icon: require('../../assets/images/snow.png'),
      title: 'There will be snow tomorrow',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      icon: require('../../assets/images/rain.png'),
      title: 'Its a rainy day',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <LinearGradient
      colors={['#075B94', '#080745', '#07072A']}
      style={styles.container}>
      <Text style={styles.heading}>Notification</Text>

      <FlatList
        data={notificationData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.notificationCard}>
            <View style={styles.notificationContainer}>
              <View style={styles.iconContainer}>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.notificationInfo}>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#075B94',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#080745',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  notificationContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationInfo: {
    flex: 1,
    marginLeft: 20,
  },
  titleText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 5,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Notification;
