/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoAlignmentAlignedTo = (function (_React$Component) {
    _inherits(GoAlignmentAlignedTo, _React$Component);

    function GoAlignmentAlignedTo() {
        _classCallCheck(this, GoAlignmentAlignedTo);

        _React$Component.apply(this, arguments);
    }

    GoAlignmentAlignedTo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.25 22.5l5-5 11.25 11.25 6.25-6.25v17.5h-17.5l6.25-6.25-11.25-11.25z m-7.5-5c-4.1425 0-7.5-3.3575-7.5-7.5s3.3575-7.5 7.5-7.5 7.5 3.3575 7.5 7.5-3.3575 7.5-7.5 7.5z' })
            )
        );
    };

    return GoAlignmentAlignedTo;
})(React.Component);

exports['default'] = GoAlignmentAlignedTo;
module.exports = exports['default'];