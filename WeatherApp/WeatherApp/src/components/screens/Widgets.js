import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Widgets = () => {
  // Sample widget data
  const widgetsData = [
    {place: 'Kochi, kerala', weather: 'sunny', temperature: '28°'},
    {place: 'New York', weather: 'rainy-cloud', temperature: '24°'},
    {place: 'Tokyo', weather: 'snow', temperature: '02°'},
    {place: 'Sydney', weather: 'lighting', temperature: '30°'},
  ];

  const getBackgroundColor = weather => {
    switch (weather) {
      case 'rainy':
        return '#080745';
      case 'rainy-cloud':
        return '#075B94';
      case 'lighting':
        return '#07072A';
      case 'snow':
        return '#87CEEB';
      case 'thunder':
        return '#075B94';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <LinearGradient
      colors={['#075B94', '#080745', '#07072A']}
      style={styles.container}>
      <Text style={styles.heading}>Widgets</Text>
      <FlatList
        data={widgetsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.widgetCard,
              {backgroundColor: getBackgroundColor(item.weather)},
            ]}>
            {item.weather === 'sunny' && (
              <Image
                source={require('../../assets/images/clouds.png')}
                style={styles.backgroundImage}
              />
            )}
            <Image
              source={getWeatherIcon(item.weather)}
              style={styles.weatherIcon}
            />
            <View style={styles.weatherInfo}>
              <Text style={styles.placeText}>{item.place}</Text>
              <Text style={styles.weatherText}>{item.weather}</Text>
            </View>
            <Text style={styles.temperatureText}>{item.temperature}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
};

const getWeatherIcon = weather => {
  switch (weather) {
    case 'sunny':
      return require('../../assets/images/thunder.png');
    case 'rainy-cloud':
      return require('../../assets/images/rainy-cloud.png');
    case 'rainy':
      return require('../../assets/images/rain.png');
    case 'lighting':
      return require('../../assets/images/lighting.png');
    case 'snow':
      return require('../../assets/images/snow.png');
    case 'thunder':
      return require('../../assets/images/thunder.png');
    default:
      return require('../../assets/images/rainy-cloud.png');
  }
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
    marginBottom: 30,
  },
  widgetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 10,
    resizeMode: 'cover',
    height: 90,
    width: 354,
    borderRadius: 20,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherInfo: {
    flex: 1,
    marginLeft: 50,
  },
  placeText: {
    color: '#FFF',
    fontSize: 18,
  },
  weatherText: {
    marginTop: 4,
    color: '#999',
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperatureText: {
    color: '#FFF',
    fontSize: 34,
  },
});

export default Widgets;
