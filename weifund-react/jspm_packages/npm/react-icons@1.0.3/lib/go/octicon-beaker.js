/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBeaker = (function (_React$Component) {
    _inherits(GoOcticonBeaker, _React$Component);

    function GoOcticonBeaker() {
        _classCallCheck(this, GoOcticonBeaker);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBeaker.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35.9 36.5l-8.4-19v-10h2.5v-2.5h-22.5v2.5h2.5v10l-8.4 19c-0.8 1.6 0.4 3.5 2.2 3.5h29.9c1.8 0 3-1.9 2.2-3.5z m-26.5-11.5l3.1-7.5v-10h12.5v10l3.1 7.5h-18.7z m10.6-5h2.5v2.5h-2.5v-2.5z m-2.5-2.5h-2.5v-2.5h2.5v2.5z m0-7.5h2.5v2.5h-2.5v-2.5z m0-7.5h-2.5v-2.5h2.5v2.5z' })
            )
        );
    };

    return GoOcticonBeaker;
})(React.Component);

exports['default'] = GoOcticonBeaker;
module.exports = exports['default'];