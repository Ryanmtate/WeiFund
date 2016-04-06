/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFlame = (function (_React$Component) {
    _inherits(GoOcticonFlame, _React$Component);

    function GoOcticonFlame() {
        _classCallCheck(this, GoOcticonFlame);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFlame.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.9 1.8c2 5.2 1 8-1.2 10.3-2.4 2.5-6.1 4.4-8.7 8.1-3.5 4.8-4.1 15.6 8.4 18.4-5.2-2.8-6.4-10.8-0.7-15.9-1.5 4.9 1.3 8 4.7 6.9 3.3-1.1 5.5 1.3 5.4 4 0 1.9-0.8 3.5-2.7 4.4 8.2-1.5 11.5-8.2 11.5-13.4 0-6.8-6.1-7.7-3.1-13.4-3.6 0.3-4.8 2.7-4.5 6.6 0.2 2.6-2.4 4.3-4.4 3.1-1.6-0.9-1.6-2.8-0.2-4.2 3-3 4.2-9.8-4.5-14.9z' })
            )
        );
    };

    return GoOcticonFlame;
})(React.Component);

exports['default'] = GoOcticonFlame;
module.exports = exports['default'];