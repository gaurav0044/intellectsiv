/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/navigations';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);