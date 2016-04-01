/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMailRead = (function (_React$Component) {
    _inherits(GoOcticonMailRead, _React$Component);

    function GoOcticonMailRead() {
        _classCallCheck(this, GoOcticonMailRead);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMailRead.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 12.5h-5v-2.5h5v2.5z m7.5 2.5h-12.5v2.5h12.5v-2.5z m12.5-1.2v21.2c0 1.4-1.1 2.5-2.5 2.5h-30c-1.4 0-2.5-1.1-2.5-2.5v-21.2c0-0.8 0.4-1.6 1.1-2l3.9-2.9v-1.4c0-1.4 1.1-2.5 2.5-2.5h3l7-5 7 5h3c1.4 0 2.5 1.1 2.5 2.5v1.4l3.9 2.9c0.7 0.4 1.1 1.2 1.1 2z m-27.5 4.9l10 6.3 10-6.3v-11.2h-20v11.2z m-5 15l11.3-7.5-11.3-7.5v15z m27.5 1.3l-12.5-7.5-12.5 7.5h25z m2.5-16.3l-11.3 7.5 11.3 7.5v-15z' })
            )
        );
    };

    return GoOcticonMailRead;
})(React.Component);

exports['default'] = GoOcticonMailRead;
module.exports = exports['default'];