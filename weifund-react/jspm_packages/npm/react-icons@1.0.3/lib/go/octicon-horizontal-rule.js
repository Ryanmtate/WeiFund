/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonHorizontalRule = (function (_React$Component) {
    _inherits(GoOcticonHorizontalRule, _React$Component);

    function GoOcticonHorizontalRule() {
        _classCallCheck(this, GoOcticonHorizontalRule);

        _React$Component.apply(this, arguments);
    }

    GoOcticonHorizontalRule.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 17.5h5v5h2.5v-15h-2.5v7.5h-5v-7.5h-2.5v15h2.5v-5z m22.5 5v-5h-2.5v5h2.5z m0-7.5v-5h-2.5v5h2.5z m-7.5 0v-5h5v-2.5h-7.5v15h2.5v-5h5v-2.5h-5z m-17.5 17.5h25v-5h-25v5z' })
            )
        );
    };

    return GoOcticonHorizontalRule;
})(React.Component);

exports['default'] = GoOcticonHorizontalRule;
module.exports = exports['default'];