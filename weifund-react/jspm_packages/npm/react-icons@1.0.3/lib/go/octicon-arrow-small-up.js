/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonArrowSmallUp = (function (_React$Component) {
    _inherits(GoOcticonArrowSmallUp, _React$Component);

    function GoOcticonArrowSmallUp() {
        _classCallCheck(this, GoOcticonArrowSmallUp);

        _React$Component.apply(this, arguments);
    }

    GoOcticonArrowSmallUp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 12.5l-7.5 10h5v5h5v-5h5l-7.5-10z' })
            )
        );
    };

    return GoOcticonArrowSmallUp;
})(React.Component);

exports['default'] = GoOcticonArrowSmallUp;
module.exports = exports['default'];