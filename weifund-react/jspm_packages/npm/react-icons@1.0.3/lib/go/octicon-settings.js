/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonSettings = (function (_React$Component) {
    _inherits(GoOcticonSettings, _React$Component);

    function GoOcticonSettings() {
        _classCallCheck(this, GoOcticonSettings);

        _React$Component.apply(this, arguments);
    }

    GoOcticonSettings.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.5 17.5h-2.5v-12.5h2.5v12.5z m-2.5 17.5h2.5v-7.5h-2.5v7.5z m12.5 0h2.5v-15h-2.5v15z m12.5 0h2.5v-5h-2.5v5z m2.5-30h-2.5v15h2.5v-15z m-12.5 0h-2.5v5h2.5v-5z m-10 15h-7.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h7.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z m12.5-7.5h-7.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h7.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z m12.5 10h-7.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h7.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonSettings;
})(React.Component);

exports['default'] = GoOcticonSettings;
module.exports = exports['default'];