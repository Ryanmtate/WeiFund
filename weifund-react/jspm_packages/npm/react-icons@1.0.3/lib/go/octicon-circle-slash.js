/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCircleSlash = (function (_React$Component) {
    _inherits(GoOcticonCircleSlash, _React$Component);

    function GoOcticonCircleSlash() {
        _classCallCheck(this, GoOcticonCircleSlash);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCircleSlash.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 2.5c-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5-7.9-17.5-17.5-17.5z m0 3.2c3.2 0 6.2 1.1 8.7 3l-20 20c-1.9-2.5-3-5.5-3-8.7 0-7.9 6.4-14.3 14.3-14.3z m0 28.6c-3.2 0-6.2-1.1-8.7-3l20-20c1.9 2.4 3 5.5 3 8.7 0 7.9-6.4 14.3-14.3 14.3z' })
            )
        );
    };

    return GoOcticonCircleSlash;
})(React.Component);

exports['default'] = GoOcticonCircleSlash;
module.exports = exports['default'];