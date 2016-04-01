/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatReclineExtra = (function (_React$Component) {
    _inherits(MdAirlineSeatReclineExtra, _React$Component);

    function MdAirlineSeatReclineExtra() {
        _classCallCheck(this, MdAirlineSeatReclineExtra);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatReclineExtra.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm8.9 9.4c-1.5-1.1-1.9-3.1-0.8-4.6 1.1-1.5 3.1-1.9 4.7-0.9 1.5 1.1 1.8 3.2 0.8 4.7-1.1 1.5-3.2 1.9-4.7 0.8z m17.8 22.3h-11.8c-2.5 0-4.6-1.8-5-4.3l-3.2-15.7h-3.4l3.4 16.2c0.6 4.1 4.1 7.1 8.2 7.1h11.8v-3.3z m0.4-6.7h-8.2l-1.7-6.8c2.6 1.5 5.5 2.5 8.6 2v-3.5c-2.7 0.5-5.7-0.5-7.8-2.1l-2.8-2.2c-0.3-0.3-0.8-0.5-1.2-0.6-0.6-0.1-1.1-0.2-1.7-0.1h0c-2.1 0.4-3.4 2.3-3.1 4.4l2.3 9.8c0.4 2.4 2.5 4.1 4.9 4.1h11.4l6.4 5 2.5-2.5-9.7-7.5z' })
            )
        );
    };

    return MdAirlineSeatReclineExtra;
})(React.Component);

exports['default'] = MdAirlineSeatReclineExtra;
module.exports = exports['default'];