var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var ser = new SerialPort('/dev/ttyACM0', {
parser: serialport.parsers.readline('\n'),
    baudrate: 9600
});

module.exports = ser;