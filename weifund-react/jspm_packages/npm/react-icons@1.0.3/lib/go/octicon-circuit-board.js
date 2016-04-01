/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCircuitBoard = (function (_React$Component) {
    _inherits(GoOcticonCircuitBoard, _React$Component);

    function GoOcticonCircuitBoard() {
        _classCallCheck(this, GoOcticonCircuitBoard);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCircuitBoard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 12.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5z m20 0c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5z m0 15c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5z m5-25h-20v5.4c0.9 0.5 1.6 1.2 2.1 2.1h5.8c1.1-2 3.3-3.2 5.9-2.6 1.9 0.5 3.4 2 3.8 3.8 0.8 3.5-1.8 6.5-5.1 6.5-2 0-3.7-1.1-4.6-2.7h-5.8c-1.1 2-3.3 3.2-5.9 2.6-1.8-0.5-3.3-2-3.8-3.8-0.6-2.6 0.6-4.8 2.6-5.9v-5.4h-5c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5l12.5-12.5h5.4c1.1-2 3.3-3.2 5.9-2.6 1.9 0.5 3.4 2 3.8 3.8 0.8 3.5-1.8 6.5-5.1 6.5-2 0-3.7-1.1-4.6-2.7h-2.9l-7.5 7.5h22.5c1.4 0 2.5-1.1 2.5-2.5v-30c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonCircuitBoard;
})(React.Component);

exports['default'] = GoOcticonCircuitBoard;
module.exports = exports['default'];