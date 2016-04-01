/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonVersions = (function (_React$Component) {
    _inherits(GoOcticonVersions, _React$Component);

    function GoOcticonVersions() {
        _classCallCheck(this, GoOcticonVersions);

        _React$Component.apply(this, arguments);
    }

    GoOcticonVersions.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 7.5h-15c-1.4 0-2.5 1.1-2.5 2.5v20c0 1.4 1.1 2.5 2.5 2.5h15c1.4 0 2.5-1.1 2.5-2.5v-20c0-1.4-1.1-2.5-2.5-2.5z m-2.5 20h-10v-15h10v15z m-20-17.5h2.5v2.5h-2.5v15h2.5v2.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5v-15c0-1.4 1.1-2.5 2.5-2.5z m-7.5 2.5h2.5v2.5h-2.5v10h2.5v2.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5v-10c0-1.4 1.1-2.5 2.5-2.5z' })
            )
        );
    };

    return GoOcticonVersions;
})(React.Component);

exports['default'] = GoOcticonVersions;
module.exports = exports['default'];