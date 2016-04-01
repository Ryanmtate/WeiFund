/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonScreenFull = (function (_React$Component) {
    _inherits(GoOcticonScreenFull, _React$Component);

    function GoOcticonScreenFull() {
        _classCallCheck(this, GoOcticonScreenFull);

        _React$Component.apply(this, arguments);
    }

    GoOcticonScreenFull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 25h2.5v7.5c0 1.4-1.1 2.5-2.5 2.5h-7.5v-2.5h7.5v-7.5z m-30 0h-2.5v7.5c0 1.4 1.1 2.5 2.5 2.5h7.5v-2.5h-7.5v-7.5z m0-17.5h7.5v-2.5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v7.5h2.5v-7.5z m2.5 2.5h25v20h-25v-20z m5 15h15v-10h-15v10z m22.5-20h-7.5v2.5h7.5v7.5h2.5v-7.5c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonScreenFull;
})(React.Component);

exports['default'] = GoOcticonScreenFull;
module.exports = exports['default'];