//provider service
angular.module("telephoneList").provider("serialGenerator", function () {
    var _length = 15;
    this.getLength = function ()
    {
        return _length;
    }
    this.setLength = function (lenght)
    {
        _length = lenght;
    }
    this.$get = function () {
        return {
            generate: function () {
                var serial = ""
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        }
    }
});