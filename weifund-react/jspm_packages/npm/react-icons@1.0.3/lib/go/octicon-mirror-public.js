/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMirrorPublic = (function (_React$Component) {
    _inherits(GoOcticonMirrorPublic, _React$Component);

    function GoOcticonMirrorPublic() {
        _classCallCheck(this, GoOcticonMirrorPublic);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMirrorPublic.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm38.7 11.8l-17.5-11.8-17.4 11.8c-0.8 0.4-1.3 1.1-1.3 1.9v26.3l18.7-10 18.8 10v-26.3c0-0.8-0.5-1.5-1.3-1.9z m-1.2 24.4l-15-8.1v-3.1h-2.5v3.1l-15 8.1v-22.5l15-10v11.3h2.5v-11.3l15 10v22.5z m-22.5-18.7h12.5v-5l7.5 7.5-7.5 7.5v-5h-12.5v5l-7.5-7.5 7.5-7.5v5z' })
            )
        );
    };

    return GoOcticonMirrorPublic;
})(React.Component);

exports['default'] = GoOcticonMirrorPublic;
module.exports = exports['default'];