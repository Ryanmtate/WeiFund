/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBriefcase = (function (_React$Component) {
    _inherits(GoOcticonBriefcase, _React$Component);

    function GoOcticonBriefcase() {
        _classCallCheck(this, GoOcticonBriefcase);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBriefcase.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 10v-2.5c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4 0-2.5 1.1-2.5 2.5v2.5h-10c-1.4 0-2.5 1.1-2.5 2.5v20c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-20c0-1.4-1.1-2.5-2.5-2.5h-10z m-7.5-2.5h5v2.5h-5v-2.5z m17.5 15h-12.5v2.5h-5v-2.5h-12.5v-10h2.5v7.5h25v-7.5h2.5v10z' })
            )
        );
    };

    return GoOcticonBriefcase;
})(React.Component);

exports['default'] = GoOcticonBriefcase;
module.exports = exports['default'];