/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonUnfold = (function (_React$Component) {
    _inherits(GoOcticonUnfold, _React$Component);

    function GoOcticonUnfold() {
        _classCallCheck(this, GoOcticonUnfold);

        _React$Component.apply(this, arguments);
    }

    GoOcticonUnfold.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.2 21.2l6.3 6.3c0 1.4-1.1 2.5-2.5 2.5h-10v-2.5h8.7l-5-5h-17.4l-5 5h8.7v2.5h-10c-1.4 0-2.5-1.1-2.5-2.5l6.3-6.3-6.3-6.2c0-1.4 1.1-2.5 2.5-2.5h10v2.5h-8.7l5 5h17.4l5-5h-8.7v-2.5h10c1.4 0 2.5 1.1 2.5 2.5l-6.3 6.2z m-13.7-3.7h5v-7.5h5l-7.5-7.5-7.5 7.5h5v7.5z m5 7.5h-5v7.5h-5l7.5 7.5 7.5-7.5h-5v-7.5z' })
            )
        );
    };

    return GoOcticonUnfold;
})(React.Component);

exports['default'] = GoOcticonUnfold;
module.exports = exports['default'];