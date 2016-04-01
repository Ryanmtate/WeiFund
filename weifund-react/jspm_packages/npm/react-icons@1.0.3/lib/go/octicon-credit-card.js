/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCreditCard = (function (_React$Component) {
    _inherits(GoOcticonCreditCard, _React$Component);

    function GoOcticonCreditCard() {
        _classCallCheck(this, GoOcticonCreditCard);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCreditCard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 22.5h-25v-2.5h25v2.5z m10-15v22.5c0 1.4-1.1 2.5-2.5 2.5h-35c-1.4 0-2.5-1.1-2.5-2.5v-22.5c0-1.4 1.1-2.5 2.5-2.5h35c1.4 0 2.5 1.1 2.5 2.5z m-2.5 7.5h-35v15h35v-15z m0-7.5h-35v2.5h35v-2.5z m-22.5 17.5h-10v2.5h10v-2.5z' })
            )
        );
    };

    return GoOcticonCreditCard;
})(React.Component);

exports['default'] = GoOcticonCreditCard;
module.exports = exports['default'];