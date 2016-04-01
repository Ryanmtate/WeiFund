/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatLegroomExtra = (function (_React$Component) {
    _inherits(MdAirlineSeatLegroomExtra, _React$Component);

    function MdAirlineSeatLegroomExtra() {
        _classCallCheck(this, MdAirlineSeatLegroomExtra);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatLegroomExtra.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.7 20v-15h-3.4v15c0 4.6 3.8 8.3 8.4 8.3h10v-3.3h-10c-2.8 0-5-2.2-5-5z m31.3 8.7c-0.6-1.2-2.1-1.6-3.3-1l-1.9 0.8-5.6-11.6c-0.6-1.1-1.8-1.9-3-1.9l-5.9 0v-10h-10v13.3c0 2.8 2.3 5 5 5h11.7l5.7 11.7 6.2-2.8c1.3-0.6 1.8-2.2 1.1-3.5z' })
            )
        );
    };

    return MdAirlineSeatLegroomExtra;
})(React.Component);

exports['default'] = MdAirlineSeatLegroomExtra;
module.exports = exports['default'];