/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalCellularConnectedNoInternet4Bar = (function (_React$Component) {
    _inherits(MdSignalCellularConnectedNoInternet4Bar, _React$Component);

    function MdSignalCellularConnectedNoInternet4Bar() {
        _classCallCheck(this, MdSignalCellularConnectedNoInternet4Bar);

        _React$Component.apply(this, arguments);
    }

    MdSignalCellularConnectedNoInternet4Bar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 30h3.4v-13.3h-3.4v13.3z m0 6.7h3.4v-3.4h-3.4v3.4z m-30 0h26.7v-23.4h6.7v-10l-33.4 33.4z' })
            )
        );
    };

    return MdSignalCellularConnectedNoInternet4Bar;
})(React.Component);

exports['default'] = MdSignalCellularConnectedNoInternet4Bar;
module.exports = exports['default'];