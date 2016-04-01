/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatLegroomReduced = (function (_React$Component) {
    _inherits(MdAirlineSeatLegroomReduced, _React$Component);

    function MdAirlineSeatLegroomReduced() {
        _classCallCheck(this, MdAirlineSeatLegroomReduced);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatLegroomReduced.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 32c0.3 1.6-0.9 3-2.5 3h-7.5v-5l1.7-6.7h-10c-2.7 0-5-2.2-5-5v-13.3h10v10h8.3c1.9 0 3.4 1.5 3.4 3.3l-3.4 11.7h2.4c1.3 0 2.3 0.8 2.6 2z m-25-12v-15h-3.3v15c0 4.6 3.7 8.3 8.3 8.3h6.7v-3.3h-6.7c-2.7 0-5-2.2-5-5z' })
            )
        );
    };

    return MdAirlineSeatLegroomReduced;
})(React.Component);

exports['default'] = MdAirlineSeatLegroomReduced;
module.exports = exports['default'];