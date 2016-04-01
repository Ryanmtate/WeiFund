/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdStayPrimaryPortrait = (function (_React$Component) {
    _inherits(MdStayPrimaryPortrait, _React$Component);

    function MdStayPrimaryPortrait() {
        _classCallCheck(this, MdStayPrimaryPortrait);

        _React$Component.apply(this, arguments);
    }

    MdStayPrimaryPortrait.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.3 1.7l-16.6 0c-1.9 0-3.3 1.5-3.3 3.3v30c0 1.8 1.4 3.3 3.3 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-30c0-1.8-1.5-3.3-3.4-3.3z m0 30h-16.6v-23.4h16.6v23.4z' })
            )
        );
    };

    return MdStayPrimaryPortrait;
})(React.Component);

exports['default'] = MdStayPrimaryPortrait;
module.exports = exports['default'];