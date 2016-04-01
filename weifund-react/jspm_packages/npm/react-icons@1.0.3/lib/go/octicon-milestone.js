/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMilestone = (function (_React$Component) {
    _inherits(GoOcticonMilestone, _React$Component);

    function GoOcticonMilestone() {
        _classCallCheck(this, GoOcticonMilestone);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMilestone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 5h-5v-5h5v5z m10 12.5h-25c-1.4 0-2.5-1.1-2.5-2.5v-5c0-1.4 1.1-2.5 2.5-2.5h25l5 5-5 5z m-10-7.5h-5v5h5v-5z m-5 30h5v-20h-5v20z' })
            )
        );
    };

    return GoOcticonMilestone;
})(React.Component);

exports['default'] = GoOcticonMilestone;
module.exports = exports['default'];