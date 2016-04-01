/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLogIn = (function (_React$Component) {
    _inherits(GoOcticonLogIn, _React$Component);

    function GoOcticonLogIn() {
        _classCallCheck(this, GoOcticonLogIn);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLogIn.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 16.9v13.1h10v-10h2.5v10c0 1.4-1.1 2.5-2.5 2.5h-10v7.5l-13.6-6.8c-0.9-0.4-1.4-1.3-1.4-2.3v-28.4c0-1.4 1.1-2.5 2.5-2.5h22.5c1.4 0 2.5 1.1 2.5 2.5v7.5h-2.5v-7.5h-20l10 5v5.6l7.5-5.6v5h10v5h-10v5l-7.5-5.6z' })
            )
        );
    };

    return GoOcticonLogIn;
})(React.Component);

exports['default'] = GoOcticonLogIn;
module.exports = exports['default'];