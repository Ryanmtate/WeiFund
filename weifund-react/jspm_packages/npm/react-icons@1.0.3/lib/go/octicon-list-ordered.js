/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonListOrdered = (function (_React$Component) {
    _inherits(GoOcticonListOrdered, _React$Component);

    function GoOcticonListOrdered() {
        _classCallCheck(this, GoOcticonListOrdered);

        _React$Component.apply(this, arguments);
    }

    GoOcticonListOrdered.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 22.5h17.5v-5h-17.5v5z m0 10h17.5v-5h-17.5v5z m0-25v5h17.5v-5h-17.5z m-9.4 10h3v-10h-1.4l-3.3 0.9v2l1.7-0.1v7.2z m4.3 8c0-1.4-0.5-3-3.8-3-1.3 0-2.5 0.2-3.2 0.6l0 2.6c0.9-0.4 1.7-0.6 2.6-0.6s1.3 0.4 1.3 1.1c0 1-1.2 2.3-4.3 4.4v1.9h7.5v-2.6l-3.6 0.1c2-1.2 3.4-2.6 3.4-4.4l0.1-0.1z' })
            )
        );
    };

    return GoOcticonListOrdered;
})(React.Component);

exports['default'] = GoOcticonListOrdered;
module.exports = exports['default'];