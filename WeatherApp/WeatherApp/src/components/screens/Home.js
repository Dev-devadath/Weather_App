import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Locicon from '../../assets/images/location-gps.svg';
import Temp from '../../assets/images/thermostat.svg';
import Wind from '../../assets/images/wind.svg';
import Humidity from '../../assets/images/humidity.svg';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); // Move it outside the component body

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
  })}, ${currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })}`;

  const weatherDetails = [
    {time: '14:00', temperature: '32°', weather: 'rainy-cloud'},
    {time: '15:00', temperature: '30°', weather: 'rainy'},
    {time: '16:00', temperature: '28°', weather: 'lighting'},
    {time: '17:00', temperature: '27°', weather: 'snow'},
    {time: '18:00', temperature: '27°', weather: 'thunder'},
  ];

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
      <View style={styles.locationContainer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.locationText}>Kochi, Kerala</Text>
        </View>
        <Locicon width={22} height={22} />
      </View>
      <Text style={styles.dateTimeText}>{formattedDate}</Text>
      <Image
        source={require('../../assets/images/mixed_weather.png')}
        style={styles.weatherImage}
      />
      <View style={styles.weatherInfoContainer}>
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherInfoHeading}>Temp</Text>
          <Temp />
        </View>
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherInfoHeading}>Wind</Text>
          <Wind />
        </View>
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherInfoHeading}>Humidity</Text>
          <Humidity />
        </View>
      </View>
      <View style={styles.weatherValue}>
        <Text style={styles.weatherValueText}>25°</Text>
        <Text style={styles.weatherValueText}>10 km/h</Text>
        <Text style={styles.weatherValueText}>84%</Text>
      </View>
      <View style={styles.weatherDetailHeader}>
        <Text style={styles.weatherDetailHeaderText}>Today</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ReportScreen', {
              weatherDetails: weatherDetails,
            })
          }>
          <Text style={styles.weatherDetailHeaderBtn}>view all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={weatherDetails}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderWeatherCard}
        contentContainerStyle={styles.weatherDetailContainer}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 14,
  },
  dateTimeText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
  },
  weatherImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 25,
  },
  weatherInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  weatherInfo: {
    flexDirection: 'row',
    padding: 10,
  },
  weatherInfoHeading: {
    color: '#999',
    fontSize: 20,
  },
  weatherValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
    marginLeft: 30,
  },
  weatherValueText: {
    color: '#fff',
    fontSize: 20,
  },
  weatherDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  weatherDetailHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherDetailHeaderBtn: {
    color: '#075B94',
  },
  weatherCard: {
    width: 140,
    height: 80,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  weatherDetailContainer: {
    marginTop: 20,
  },
});

export default Home;
