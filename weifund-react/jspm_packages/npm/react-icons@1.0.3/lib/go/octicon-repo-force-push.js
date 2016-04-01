/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRepoForcePush = (function (_React$Component) {
    _inherits(GoOcticonRepoForcePush, _React$Component);

    function GoOcticonRepoForcePush() {
        _classCallCheck(this, GoOcticonRepoForcePush);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRepoForcePush.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 22.5h-5v17.5h-5v-17.5h-5l5.6-7.5h-5.6l7.5-10 7.5 10h-5.6l5.6 7.5z m2.5-22.5h-25c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5h10v-2.5h-10v-5h10v-2.5h-7.5v-22.5h22.5v22.5h-5v2.5h5v5h-5v2.5h5c1.4 0 2.5-1.1 2.5-2.5v-30c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonRepoForcePush;
})(React.Component);

exports['default'] = GoOcticonRepoForcePush;
module.exports = exports['default'];