/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGraph = (function (_React$Component) {
    _inherits(GoOcticonGraph, _React$Component);

    function GoOcticonGraph() {
        _classCallCheck(this, GoOcticonGraph);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGraph.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 35v2.5h-40v-37.5h2.5v35h37.5z m-27.5-2.5h-5v-12.5h5v12.5z m10 0h-5v-25h5v25z m10 0h-5v-17.5h5v17.5z' })
            )
        );
    };

    return GoOcticonGraph;
})(React.Component);

exports['default'] = GoOcticonGraph;
module.exports = exports['default'];