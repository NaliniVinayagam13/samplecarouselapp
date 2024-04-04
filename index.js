/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import MyCarousel from './src/CarouselScreen'; 
import CarouselWithPagination from './src/CarouselWithPagination';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CarouselWithPagination);
