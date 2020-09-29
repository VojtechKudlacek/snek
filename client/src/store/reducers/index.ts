import { combineReducers } from 'redux';
import socket from './socket';
import player from './player';

export default combineReducers({ socket, player });
