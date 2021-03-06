/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPlaylistAddCheck = (function (_React$Component) {
    _inherits(MdPlaylistAddCheck, _React$Component);

    function MdPlaylistAddCheck() {
        _classCallCheck(this, MdPlaylistAddCheck);

        _React$Component.apply(this, arguments);
    }

    MdPlaylistAddCheck.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35.86 19.14l2.5 2.5-11.64 11.716666666666669-7.578333333333333-7.5 2.5-2.5 5.078333333333333 5z m-32.5 7.5v-3.2833333333333314h13.283333333333331v3.2833333333333314h-13.283333333333333z m20-16.64v3.3599999999999994h-20v-3.3599999999999994h20z m0 6.640000000000001v3.3599999999999994h-20v-3.3599999999999994h20z' })
            )
        );
    };

    return MdPlaylistAddCheck;
})(React.Component);

exports['default'] = MdPlaylistAddCheck;
module.exports = exports['default'];