/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdContactMail24px = (function (_React$Component) {
    _inherits(MdContactMail24px, _React$Component);

    function MdContactMail24px() {
        _classCallCheck(this, MdContactMail24px);

        _React$Component.apply(this, arguments);
    }

    MdContactMail24px.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 13.3v-1.6l-5 3.3-5-3.3v1.6l5 3.4 5-3.4z m1.7-8.3h-33.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h33.4c1.8 0 3.3-1.5 3.3-3.3l0-23.4c0-1.8-1.5-3.3-3.3-3.3z m-23.4 5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z m10 20h-20v-1.7c0-3.3 6.7-5.1 10-5.1s10 1.8 10 5.1v1.7z m13.4-10h-13.4v-10h13.4v10z' })
            )
        );
    };

    return MdContactMail24px;
})(React.Component);

exports['default'] = MdContactMail24px;
module.exports = exports['default'];