/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdControlPointDuplicate = (function (_React$Component) {
    _inherits(MdControlPointDuplicate, _React$Component);

    function MdControlPointDuplicate() {
        _classCallCheck(this, MdControlPointDuplicate);

        _React$Component.apply(this, arguments);
    }

    MdControlPointDuplicate.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.7 13.3h-3.4v5h-5v3.4h5v5h3.4v-5h5v-3.4h-5z m-23.4 6.7c0-4.7 2.8-8.7 6.7-10.5v-3.6c-5.8 2-10 7.6-10 14.1s4.2 12.1 10 14.1v-3.6c-3.9-1.8-6.7-5.9-6.7-10.5z m21.7-15c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m0 26.7c-6.4 0-11.7-5.3-11.7-11.7s5.3-11.7 11.7-11.7 11.7 5.3 11.7 11.7-5.3 11.7-11.7 11.7z' })
            )
        );
    };

    return MdControlPointDuplicate;
})(React.Component);

exports['default'] = MdControlPointDuplicate;
module.exports = exports['default'];