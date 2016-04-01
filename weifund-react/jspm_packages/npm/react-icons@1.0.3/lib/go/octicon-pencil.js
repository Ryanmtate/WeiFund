/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonPencil = (function (_React$Component) {
    _inherits(GoOcticonPencil, _React$Component);

    function GoOcticonPencil() {
        _classCallCheck(this, GoOcticonPencil);

        _React$Component.apply(this, arguments);
    }

    GoOcticonPencil.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm2.5 30v7.5h7.5l20-20-7.5-7.5-20 20z m7.5 5h-5v-5h2.5v2.5h2.5v2.5z m25.7-23.2l-3.2 3.2-7.5-7.5 3.2-3.2c1-1 2.6-1 3.6 0l3.9 3.9c1 1 1 2.6 0 3.6z' })
            )
        );
    };

    return GoOcticonPencil;
})(React.Component);

exports['default'] = GoOcticonPencil;
module.exports = exports['default'];