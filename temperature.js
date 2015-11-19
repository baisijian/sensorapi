var fs = require('fs');

module.exports = {
    getTemp: function() {
        var data = fs.readFileSync('/sys/bus/w1/devices/28-0215536f5dff/w1_slave');

        return data;
    }
};