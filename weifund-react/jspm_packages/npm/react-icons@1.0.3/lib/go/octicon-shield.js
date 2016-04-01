/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonShield = (function (_React$Component) {
    _inherits(GoOcticonShield, _React$Component);

    function GoOcticonShield() {
        _classCallCheck(this, GoOcticonShield);

        _React$Component.apply(this, arguments);
    }

    GoOcticonShield.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 0l-17.5 5v15c0 11.7 13.3 20 17.5 20s17.5-8.3 17.5-20v-15l-17.5-5z m-5 27.5l2.9-7c0.1-0.6-0.2-1.2-0.7-1.5-1.4-0.9-2.2-2.4-2.2-4 0-2.7 2.2-5 5-5 2.7 0 5 2.3 5 5 0 1.6-0.8 3.1-2.2 4-0.5 0.3-0.8 0.9-0.7 1.5l2.9 7h-10z' })
            )
        );
    };

    return GoOcticonShield;
})(React.Component);

exports['default'] = GoOcticonShield;
module.exports = exports['default'];