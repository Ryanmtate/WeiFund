/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalCellularConnectedNoInternet1Bar = (function (_React$Component) {
    _inherits(MdSignalCellularConnectedNoInternet1Bar, _React$Component);

    function MdSignalCellularConnectedNoInternet1Bar() {
        _classCallCheck(this, MdSignalCellularConnectedNoInternet1Bar);

        _React$Component.apply(this, arguments);
    }

    MdSignalCellularConnectedNoInternet1Bar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.7 13.3v-10l-33.4 33.4h26.7v-23.4z' }),
                React.createElement('path', { d: 'm33.3 16.7v13.3h3.4v-13.3h-3.4z m-13.3 20v-16.7l-16.7 16.7h16.7z m13.3 0h3.4v-3.4h-3.4v3.4z' })
            )
        );
    };

    return MdSignalCellularConnectedNoInternet1Bar;
})(React.Component);

exports['default'] = MdSignalCellularConnectedNoInternet1Bar;
module.exports = exports['default'];