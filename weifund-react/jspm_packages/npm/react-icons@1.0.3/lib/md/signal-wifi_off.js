/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiOff = (function (_React$Component) {
    _inherits(MdSignalWifiOff, _React$Component);

    function MdSignalWifiOff() {
        _classCallCheck(this, MdSignalWifiOff);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiOff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5.466666666666667 2.421666666666667q0.9399999999999995 0.9383333333333335 11.993333333333334 11.953333333333333t16.68 16.796666666666667l-2.1099999999999994 2.1099999999999994-5.546666666666667-5.550000000000001-6.483333333333334 8.051666666666666-19.378333333333334-24.14333333333333q2.578333333333334-2.1066666666666674 6.0950000000000015-3.67l-3.360000000000001-3.4366666666666665z m33.90833333333333 9.216666666666667l-9.063333333333333 11.33-17.266666666666666-17.185q3.5166666666666657-0.7833333333333341 6.954999999999998-0.7833333333333341 9.921666666666667 0 19.375 6.641666666666667z' })
            )
        );
    };

    return MdSignalWifiOff;
})(React.Component);

exports['default'] = MdSignalWifiOff;
module.exports = exports['default'];