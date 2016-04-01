/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatLegroomNormal = (function (_React$Component) {
    _inherits(MdAirlineSeatLegroomNormal, _React$Component);

    function MdAirlineSeatLegroomNormal() {
        _classCallCheck(this, MdAirlineSeatLegroomNormal);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatLegroomNormal.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm8.3 20v-15h-3.3v15c0 4.6 3.7 8.3 8.3 8.3h10v-3.3h-10c-2.7 0-5-2.2-5-5z m25.9 10h-2.5v-11.7c0-1.8-1.5-3.3-3.4-3.3h-8.3v-10h-10v13.3c0 2.8 2.3 5 5 5h11.7v11.7h7.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return MdAirlineSeatLegroomNormal;
})(React.Component);

exports['default'] = MdAirlineSeatLegroomNormal;
module.exports = exports['default'];