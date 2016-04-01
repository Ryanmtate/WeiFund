/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonKey = (function (_React$Component) {
    _inherits(GoOcticonKey, _React$Component);

    function GoOcticonKey() {
        _classCallCheck(this, GoOcticonKey);

        _React$Component.apply(this, arguments);
    }

    GoOcticonKey.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm34.6 5.4c-1.9-1.8-4.2-2.8-7.1-2.9-2.8 0.1-5.2 1.1-7.1 2.9s-2.8 4.2-2.9 7.1c0 0.7 0.1 1.5 0.3 2.2l-15.3 15.3v2.5l2.5 2.5h5l2.5-2.5v-2.5h2.5v-2.5h2.5v-2.5h5l2.7-2.8c0.8 0.2 1.5 0.3 2.3 0.3 2.9-0.1 5.2-1.1 7.1-2.9s2.8-4.2 2.9-7.1c-0.1-2.9-1.1-5.2-2.9-7.1z m-4.6 8c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z' })
            )
        );
    };

    return GoOcticonKey;
})(React.Component);

exports['default'] = GoOcticonKey;
module.exports = exports['default'];