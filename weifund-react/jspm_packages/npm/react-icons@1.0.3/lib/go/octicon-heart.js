/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonHeart = (function (_React$Component) {
    _inherits(GoOcticonHeart, _React$Component);

    function GoOcticonHeart() {
        _classCallCheck(this, GoOcticonHeart);

        _React$Component.apply(this, arguments);
    }

    GoOcticonHeart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33 10c-1.3-1.6-3.1-2.4-5.5-2.5-2.4 0-4.2 1.1-5.5 2.5s-2 2.3-2 2.5c0-0.2-0.7-1.1-2-2.5s-2.9-2.5-5.5-2.5c-2.4 0.1-4.2 0.9-5.5 2.5-1.3 1.5-2 3.2-2 5 0 1.3 0.2 3.8 1.7 6.7s5.8 7.3 13.3 13.3c7.5-6 11.9-10.4 13.4-13.3s1.6-5.5 1.6-6.7c0-1.8-0.7-3.5-2-5z' })
            )
        );
    };

    return GoOcticonHeart;
})(React.Component);

exports['default'] = GoOcticonHeart;
module.exports = exports['default'];