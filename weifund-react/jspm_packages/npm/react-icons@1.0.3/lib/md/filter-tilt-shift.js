/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFilterTiltShift = (function (_React$Component) {
    _inherits(MdFilterTiltShift, _React$Component);

    function MdFilterTiltShift() {
        _classCallCheck(this, MdFilterTiltShift);

        _React$Component.apply(this, arguments);
    }

    MdFilterTiltShift.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.3 6.8v-3.4c-3.3 0.4-6.4 1.7-8.8 3.7l2.3 2.4c1.9-1.4 4.1-2.4 6.5-2.7z m12.2 0.3c-2.4-2-5.5-3.3-8.8-3.7v3.4c2.4 0.3 4.6 1.3 6.5 2.7l2.3-2.4z m2.7 11.2h3.4c-0.3-3.3-1.7-6.4-3.7-8.8l-2.4 2.3c1.4 1.9 2.4 4.1 2.7 6.5z m-23.7-6.5l-2.4-2.3c-2 2.4-3.3 5.5-3.7 8.8h3.4c0.3-2.4 1.3-4.6 2.7-6.5z m-2.7 9.9h-3.4c0.4 3.3 1.7 6.4 3.7 8.8l2.4-2.3c-1.5-1.9-2.4-4.1-2.7-6.5z m18.2-1.7c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z m5.5 8.2l2.4 2.4c2-2.5 3.4-5.6 3.7-8.9h-3.4c-0.3 2.4-1.3 4.6-2.7 6.5z m-8.8 5v3.4c3.3-0.3 6.4-1.7 8.8-3.7l-2.3-2.4c-1.9 1.5-4.1 2.4-6.5 2.7z m-12.2-0.3c2.4 2 5.5 3.4 8.8 3.7v-3.4c-2.4-0.3-4.6-1.2-6.5-2.7l-2.3 2.4z' })
            )
        );
    };

    return MdFilterTiltShift;
})(React.Component);

exports['default'] = MdFilterTiltShift;
module.exports = exports['default'];