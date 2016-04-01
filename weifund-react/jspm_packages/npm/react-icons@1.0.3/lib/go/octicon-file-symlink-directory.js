/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFileSymlinkDirectory = (function (_React$Component) {
    _inherits(GoOcticonFileSymlinkDirectory, _React$Component);

    function GoOcticonFileSymlinkDirectory() {
        _classCallCheck(this, GoOcticonFileSymlinkDirectory);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFileSymlinkDirectory.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 10h-15v-2.5c0-1.6-0.8-2.5-2.5-2.5h-12.5c-1.4 0-2.5 1.1-2.5 2.5v25c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-20c0-1.4-1.1-2.5-2.5-2.5z m-30-2.5h12.5v2.5h-12.5v-2.5z m15 22.5v-5c-2.5 0-4.6 0.5-6.4 1.8s-2.9 3.1-3.6 5.7c0-4.1 1-7.2 2.8-9.3 1.8-2.1 4.2-3.2 7.2-3.2v-5l10 7.5-10 7.5z' })
            )
        );
    };

    return GoOcticonFileSymlinkDirectory;
})(React.Component);

exports['default'] = GoOcticonFileSymlinkDirectory;
module.exports = exports['default'];