/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonIssueClosed = (function (_React$Component) {
    _inherits(GoOcticonIssueClosed, _React$Component);

    function GoOcticonIssueClosed() {
        _classCallCheck(this, GoOcticonIssueClosed);

        _React$Component.apply(this, arguments);
    }

    GoOcticonIssueClosed.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 25h5v5h-5v-5z m5-15h-5v12.5h5v-12.5z m3.7 3.7l-2.5 2.5 6.3 6.3 10-11.3-2.5-2.5-7.5 8.8-3.8-3.8z m-6.2 20.6c-7.9 0-14.3-6.4-14.3-14.3s6.4-14.3 14.3-14.3c4.6 0 8.6 2.2 11.2 5.5l2.4-2.3c-3.2-3.9-8.1-6.4-13.6-6.4-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5l-3.8 3.8c-1.6 6-7.1 10.5-13.7 10.5z' })
            )
        );
    };

    return GoOcticonIssueClosed;
})(React.Component);

exports['default'] = GoOcticonIssueClosed;
module.exports = exports['default'];