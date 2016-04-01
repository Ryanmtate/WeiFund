/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRuby = (function (_React$Component) {
    _inherits(GoOcticonRuby, _React$Component);

    function GoOcticonRuby() {
        _classCallCheck(this, GoOcticonRuby);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRuby.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 15l-12.5 12.5v-17.5h7.5l5 5z m7.5 0l-20 20-20-20 10-10h20l10 10z m-20 16.2l16.2-16.2-7.5-7.5h-17.4l-7.5 7.5 16.2 16.2z' })
            )
        );
    };

    return GoOcticonRuby;
})(React.Component);

exports['default'] = GoOcticonRuby;
module.exports = exports['default'];