/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoStop = (function (_React$Component) {
    _inherits(GoStop, _React$Component);

    function GoStop() {
        _classCallCheck(this, GoStop);

        _React$Component.apply(this, arguments);
    }

    GoStop.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 0h-15l-12.5 12.5v15l12.5 12.5h15l12.5-12.5v-15l-12.5-12.5z m7.5 25l-10 10h-10l-10-10v-10l10-10h10l10 10v10z m-17.5-2.5h5v-12.5h-5v12.5z m0 7.5h5v-5h-5v5z' })
            )
        );
    };

    return GoStop;
})(React.Component);

exports['default'] = GoStop;
module.exports = exports['default'];