/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatFlat = (function (_React$Component) {
    _inherits(MdAirlineSeatFlat, _React$Component);

    function MdAirlineSeatFlat() {
        _classCallCheck(this, MdAirlineSeatFlat);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatFlat.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.7 18.3v3.4h-21.7v-10h15c3.7 0 6.7 3 6.7 6.6z m-33.4 5v3.4h10v3.3h13.4v-3.3h10v-3.4h-33.4z m8.6-3.1c1.9-2 1.9-5.2-0.1-7.1-1.9-1.9-5.1-1.9-7 0.1-2 2-1.9 5.1 0 7 2 2 5.2 1.9 7.1 0z' })
            )
        );
    };

    return MdAirlineSeatFlat;
})(React.Component);

exports['default'] = MdAirlineSeatFlat;
module.exports = exports['default'];