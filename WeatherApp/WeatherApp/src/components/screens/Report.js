import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Report = ({route}) => {
  const {params} = route;
  const weatherDetails = params?.weatherDetails || [];

  const renderWeatherCard = ({item}) => (
    <View
      style={[
        styles.weatherCard,
        {backgroundColor: getBackgroundColor(item.weather)},
      ]}>
      <Image source={getWeatherIcon(item.weather)} style={styles.weatherIcon} />
      <View style={styles.weatherCardContainer}>
        <Text style={styles.weatherTime}>{item.time}</Text>
        <Text style={styles.weatherTemperature}>{item.temperature}</Text>
      </View>
    </View>
  );

  const dailyForecasts = [
    {day: 'Monday', date: '21 June', weather: 'lighting', temperature: '28°'},
    {day: 'Tuesday', date: '22 June', weather: 'rainy', temperature: '26°'},
    {
      day: 'Wednesday',
      date: '23 June',
      weather: 'rainy-cloud',
      temperature: '24°',
    },
    {day: 'Thursday', date: '24 June', weather: 'thunder', temperature: '27°'},
    {day: 'Friday', date: '25 June', weather: 'snow', temperature: '22°'},
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

  const getWeatherIcon = weather => {
    switch (weather) {
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

  return (
    <LinearGradient
      colors={['#075B94', '#080745', '#07072A']}
      style={styles.container}>
      <Text style={styles.heading}>Forecast Report</Text>
      <Text style={styles.dateText}>Today</Text>
      <FlatList
        data={weatherDetails}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderWeatherCard}
        contentContainerStyle={styles.weatherDetailContainer}
      />
      <View style={styles.nextForecastContainer}>
        <Text style={styles.nextForecastText}>Next Forecast</Text>
        <TouchableOpacity style={styles.dropdownContainer}>
          <Text style={styles.dropdownText}>5 Day</Text>
          <Image
            source={require('../../assets/images/down-arrow.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={dailyForecasts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.dailyForecastCard,
              {backgroundColor: getBackgroundColor(item.weather)},
            ]}>
            <View style={styles.ForecastDate}>
              <Text style={styles.Date}>{item.day}</Text>
              <Text style={styles.Date}>{item.date}</Text>
            </View>
            <Text style={styles.temperatureText}>{item.temperature}</Text>
            <Image
              source={getWeatherIcon(item.weather)}
              style={styles.weatherIcon}
            />
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 24,
  },
  weatherDetailContainer: {
    marginTop: 20,
    paddingBottom: 40,
  },
  weatherCard: {
    width: 140,
    height: 80,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  weatherCardContainer: {
    flexDirection: 'column',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 18,
  },
  weatherTime: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },
  weatherTemperature: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 2,
  },
  nextForecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  nextForecastText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#080745',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dropdownText: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 5,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  dailyForecastCard: {
    backgroundColor: '#1F2934',
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ForecastDate: {
    flexDirection: 'column',
  },
  Date: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 1,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  temperatureText: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Report;
