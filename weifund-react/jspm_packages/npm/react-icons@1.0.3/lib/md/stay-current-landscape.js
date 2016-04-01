/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdStayCurrentLandscape = (function (_React$Component) {
    _inherits(MdStayCurrentLandscape, _React$Component);

    function MdStayCurrentLandscape() {
        _classCallCheck(this, MdStayCurrentLandscape);

        _React$Component.apply(this, arguments);
    }

    MdStayCurrentLandscape.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm1.7 11.7l0 16.6c0 1.9 1.5 3.4 3.3 3.4h30c1.8 0 3.3-1.5 3.3-3.4v-16.6c0-1.9-1.5-3.4-3.3-3.4h-30c-1.8 0-3.3 1.5-3.3 3.4z m30 0v16.6h-23.4v-16.6h23.4z' })
            )
        );
    };

    return MdStayCurrentLandscape;
})(React.Component);

exports['default'] = MdStayCurrentLandscape;
module.exports = exports['default'];