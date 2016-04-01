/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhoneInTalk = (function (_React$Component) {
    _inherits(MdPhoneInTalk, _React$Component);

    function MdPhoneInTalk() {
        _classCallCheck(this, MdPhoneInTalk);

        _React$Component.apply(this, arguments);
    }

    MdPhoneInTalk.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 25.8c-2 0-4-0.3-5.9-0.9-0.6-0.2-1.2-0.1-1.7 0.4l-3.7 3.7c-4.7-2.4-8.6-6.3-11-11l3.7-3.7c0.5-0.4 0.6-1.1 0.4-1.7-0.6-1.8-0.9-3.8-0.9-5.9 0-0.9-0.8-1.7-1.7-1.7h-5.8c-0.9 0-1.7 0.8-1.7 1.7 0 15.6 12.7 28.3 28.3 28.3 1 0 1.7-0.7 1.7-1.7v-5.8c0-0.9-0.7-1.7-1.7-1.7z m-1.6-5.8h3.3c0-8.3-6.7-15-15-15v3.3c6.4 0 11.7 5.3 11.7 11.7z m-6.7 0h3.3c0-4.6-3.7-8.3-8.3-8.3v3.3c2.8 0 5 2.2 5 5z' })
            )
        );
    };

    return MdPhoneInTalk;
})(React.Component);

exports['default'] = MdPhoneInTalk;
module.exports = exports['default'];