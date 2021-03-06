/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoMirror = (function (_React$Component) {
    _inherits(GoMirror, _React$Component);

    function GoMirror() {
        _classCallCheck(this, GoMirror);

        _React$Component.apply(this, arguments);
    }

    GoMirror.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 12.5l-7.5 7.5 7.5 7.5v-5h15v5l7.5-7.5-7.5-7.5v5h-15v-5z m7.5-12.5l-20 12.5v27.5l20-10 20 10v-27.5l-20-12.5z m17.5 35l-15-7.5v-2.5h-5v2.5l-15 7.5v-20l15-10v10h5v-10l15 10v20z' })
            )
        );
    };

    return GoMirror;
})(React.Component);

exports['default'] = GoMirror;
module.exports = exports['default'];