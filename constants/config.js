const DB_HOST = 'localhost';
const DB_PORT = 27017;
const DB_NAME = 'iceBreaker';

const PROTOCOL = 'http'
const HOST = 'localhost';
const HOST_IP = '127.0.0.1';
const PORT = 3000;
const FULL_URI = PROTOCOL + '://' + HOST + ':' + PORT;

const COOKIE_DURATION = 30 * 60 * 1000;
const SESSION_SECRET = 'jakbgakegb545'

const PUSHER_CHANNEL = 'iceBreaker'

module.exports = {
    DB_NAME,DB_PORT,DB_HOST,FULL_URI,HOST_IP,HOST,PORT,COOKIE_DURATION,SESSION_SECRET
}