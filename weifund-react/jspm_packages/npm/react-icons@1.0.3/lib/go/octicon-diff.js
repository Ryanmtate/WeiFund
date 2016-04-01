/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDiff = (function (_React$Component) {
    _inherits(GoOcticonDiff, _React$Component);

    function GoOcticonDiff() {
        _classCallCheck(this, GoOcticonDiff);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDiff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 17.5h5v2.5h-5v5h-2.5v-5h-5v-2.5h5v-5h2.5v5z m-7.5 15h12.5v-2.5h-12.5v2.5z m11.2-27.5l8.8 8.7v23.8c0 1.4-1.1 2.5-2.5 2.5h-22.5c-1.4 0-2.5-1.1-2.5-2.5v-30c0-1.4 1.1-2.5 2.5-2.5h16.2z m6.3 10l-7.5-7.5h-15v30h22.5v-22.5z m-3.8-15h-13.7v2.5h12.5l10 10v20h2.5v-21.3l-11.3-11.2z' })
            )
        );
    };

    return GoOcticonDiff;
})(React.Component);

exports['default'] = GoOcticonDiff;
module.exports = exports['default'];