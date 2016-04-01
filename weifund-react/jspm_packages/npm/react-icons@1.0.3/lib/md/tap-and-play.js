/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTapAndPlay = (function (_React$Component) {
    _inherits(MdTapAndPlay, _React$Component);

    function MdTapAndPlay() {
        _classCallCheck(this, MdTapAndPlay);

        _React$Component.apply(this, arguments);
    }

    MdTapAndPlay.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3 26.7v3.3c4.6 0 8.4 3.7 8.4 8.3h3.3c0-6.4-5.2-11.6-11.7-11.6z m0 6.6v5h5c0-2.7-2.2-5-5-5z m0-13.3v3.3c8.3 0 15 6.8 15 15h3.4c0-10.1-8.2-18.3-18.4-18.3z m25-18.3l-16.6 0c-1.9 0-3.4 1.5-3.4 3.3v12.3c1.2 0.2 2.3 0.6 3.4 1v-10h16.6v21.7h-5c0.9 2.1 1.4 4.3 1.6 6.7h3.4c1.9 0 3.4-1.5 3.4-3.4v-28.3c0-1.8-1.5-3.3-3.4-3.3z' })
            )
        );
    };

    return MdTapAndPlay;
})(React.Component);

exports['default'] = MdTapAndPlay;
module.exports = exports['default'];