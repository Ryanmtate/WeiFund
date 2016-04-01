/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatFlatAngled = (function (_React$Component) {
    _inherits(MdAirlineSeatFlatAngled, _React$Component);

    function MdAirlineSeatFlatAngled() {
        _classCallCheck(this, MdAirlineSeatFlatAngled);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatFlatAngled.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.1 23.8l-1.2 3.2-20.6-7.5 3.5-9.4 14.3 5.1c3.5 1.3 5.3 5.1 4 8.6z m-34.6-3.6l10.8 3.9v7.6h13.4v-2.7l7.5 2.7 1.2-3.2-31.7-11.4-1.2 3.1z m9.7-3.2c2.4-1.2 3.5-4.2 2.3-6.7-1.2-2.4-4.2-3.5-6.7-2.3-2.4 1.2-3.5 4.2-2.3 6.7 1.2 2.5 4.2 3.5 6.7 2.3z' })
            )
        );
    };

    return MdAirlineSeatFlatAngled;
})(React.Component);

exports['default'] = MdAirlineSeatFlatAngled;
module.exports = exports['default'];