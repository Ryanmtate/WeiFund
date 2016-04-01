/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonScreenNormal = (function (_React$Component) {
    _inherits(GoOcticonScreenNormal, _React$Component);

    function GoOcticonScreenNormal() {
        _classCallCheck(this, GoOcticonScreenNormal);

        _React$Component.apply(this, arguments);
    }

    GoOcticonScreenNormal.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.5 10h-5v-2.5h5v-5h2.5v5c0 1.4-1.1 2.5-2.5 2.5z m0 20h-5v2.5h5v5h2.5v-5c0-1.4-1.1-2.5-2.5-2.5z m22.5-5c0 1.4-1.1 2.5-2.5 2.5h-15c-1.4 0-2.5-1.1-2.5-2.5v-10c0-1.4 1.1-2.5 2.5-2.5h15c1.4 0 2.5 1.1 2.5 2.5v10z m-5-7.5h-10v5h10v-5z m5 15v5h2.5v-5h5v-2.5h-5c-1.4 0-2.5 1.1-2.5 2.5z m2.5-25v-5h-2.5v5c0 1.4 1.1 2.5 2.5 2.5h5v-2.5h-5z' })
            )
        );
    };

    return GoOcticonScreenNormal;
})(React.Component);

exports['default'] = GoOcticonScreenNormal;
module.exports = exports['default'];