/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMegaphone = (function (_React$Component) {
    _inherits(GoOcticonMegaphone, _React$Component);

    function GoOcticonMegaphone() {
        _classCallCheck(this, GoOcticonMegaphone);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMegaphone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 2.5c-0.4 0-0.9 0.1-1.3 0.4-3.6 2.1-12.4 8.5-16.2 9.6-3.4 0-7.5 1.7-7.5 6.2s4.1 6.3 7.5 6.3c0.7 0.2 1.6 0.6 2.5 1v11.5h5v-8.6c3.4 2.1 6.7 4.5 8.7 5.7 0.4 0.3 0.9 0.4 1.3 0.4 1.3 0 2.5-1.1 2.5-2.5v-27.5c0-1.4-1.2-2.5-2.5-2.5z m0 30c-0.9-0.6-2.2-1.4-3.8-2.5-0.3-0.3-0.8-0.5-1.2-0.9v-20.8c0.4-0.3 0.8-0.5 1.2-0.8 1.5-1 2.9-1.9 3.8-2.5v27.5z m5-15h10v2.5h-10v-2.5z m0 5l10 5v2.5l-10-5v-2.5z m10-15v2.5l-10 5v-2.5l10-5z' })
            )
        );
    };

    return GoOcticonMegaphone;
})(React.Component);

exports['default'] = GoOcticonMegaphone;
module.exports = exports['default'];