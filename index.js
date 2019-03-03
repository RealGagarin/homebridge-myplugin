const request = require('request');
const url = require('url');

const Service, Characteristic;

module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("switch-plugin", "MyAwesomeSwitch", mySwitch);
};




function mySwitch(log, config) {
    this.log = log;
}

mySwitch.prototype = {

    getSwitchOnCharacteristic: function (next) {
        const me = this;
        return next(null, 1);
    },

    setSwitchOnCharacteristic: function (on, next) {
        const me = this;
        return next();
    }
};