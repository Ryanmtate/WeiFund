/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalGasStation = (function (_React$Component) {
    _inherits(MdLocalGasStation, _React$Component);

    function MdLocalGasStation() {
        _classCallCheck(this, MdLocalGasStation);

        _React$Component.apply(this, arguments);
    }

    MdLocalGasStation.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33 12.1l0-0.1-6.2-6.2-1.8 1.8 3.5 3.5c-1.6 0.6-2.7 2.1-2.7 3.9 0 2.3 1.9 4.2 4.2 4.2 0.6 0 1.1-0.2 1.7-0.4v12c0 1-0.8 1.7-1.7 1.7s-1.7-0.7-1.7-1.7v-7.5c0-1.8-1.5-3.3-3.3-3.3h-1.7v-11.7c0-1.8-1.5-3.3-3.3-3.3h-10c-1.8 0-3.3 1.5-3.3 3.3v26.7h16.6v-12.5h2.5v8.3c0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2v-15.8c0-1.2-0.5-2.2-1.2-2.9z m-13 4.6h-10v-8.4h10v8.4z m10 0c-0.9 0-1.7-0.8-1.7-1.7s0.8-1.7 1.7-1.7 1.7 0.8 1.7 1.7-0.8 1.7-1.7 1.7z' })
            )
        );
    };

    return MdLocalGasStation;
})(React.Component);

exports['default'] = MdLocalGasStation;
module.exports = exports['default'];