const request = require('request');
const url = require('url');

let Service = null, Characteristic = null;

module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("switch-plugin", "MyAwesomeSwitch", mySwitch);
};




function mySwitch(log, config) {
    this.log = log;
    this.config = config;
}

mySwitch.prototype = {

    getServices: function () {
        let informationService = new Service.AccessoryInformation();
        informationService
            .setCharacteristic(Characteristic.Manufacturer, "My switch manufacturer")
            .setCharacteristic(Characteristic.Model, "My switch model")
            .setCharacteristic(Characteristic.SerialNumber, "123-456-789");

        let switchService = new Service.Switch("My switch");
        switchService
            .getCharacteristic(Characteristic.On)
            .on('get', this.getSwitchOnCharacteristic.bind(this))
            .on('set', this.setSwitchOnCharacteristic.bind(this));

        this.informationService = informationService;
        this.switchService = switchService;
        return [informationService, switchService];
    },

    getSwitchOnCharacteristic: function (next) {
        const me = this;
        return next(null, 1);
    },

    setSwitchOnCharacteristic: function (on, next) {
        const me = this;
        return next();
    }
};