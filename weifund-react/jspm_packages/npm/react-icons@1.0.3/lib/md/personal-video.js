/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPersonalVideo = (function (_React$Component) {
    _inherits(MdPersonalVideo, _React$Component);

    function MdPersonalVideo() {
        _classCallCheck(this, MdPersonalVideo);

        _React$Component.apply(this, arguments);
    }

    MdPersonalVideo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 28.36v-20h-30v20h30z m0-23.36q1.3283333333333331 0 2.3433333333333337 0.9766666666666666t1.0166666666666657 2.383333333333333l-0.0799999999999983 20q0 1.3283333333333331-0.9766666666666666 2.3049999999999997t-2.3033333333333346 0.975000000000005h-8.361666666666668v3.359999999999996h-13.283333333333333v-3.3583333333333343h-8.354999999999999q-1.4066666666666667 0-2.3833333333333333-0.9766666666666666t-0.9766666666666666-2.306666666666665v-20q0-1.4066666666666663 0.9766666666666666-2.383333333333333t2.3800000000000003-0.9750000000000014h30.000000000000004z' })
            )
        );
    };

    return MdPersonalVideo;
})(React.Component);

exports['default'] = MdPersonalVideo;
module.exports = exports['default'];