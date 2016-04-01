/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdExitToApp = (function (_React$Component) {
    _inherits(MdExitToApp, _React$Component);

    function MdExitToApp() {
        _classCallCheck(this, MdExitToApp);

        _React$Component.apply(this, arguments);
    }

    MdExitToApp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.8 26l2.4 2.3 8.3-8.3-8.3-8.3-2.4 2.3 4.3 4.3h-16.1v3.4h16.1l-4.3 4.3z m14.9-21h-23.4c-1.8 0-3.3 1.5-3.3 3.3v6.7h3.3v-6.7h23.4v23.4h-23.4v-6.7h-3.3v6.7c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z' })
            )
        );
    };

    return MdExitToApp;
})(React.Component);

exports['default'] = MdExitToApp;
module.exports = exports['default'];