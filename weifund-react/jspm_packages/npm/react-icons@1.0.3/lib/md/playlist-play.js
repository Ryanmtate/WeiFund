/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPlaylistPlay = (function (_React$Component) {
    _inherits(MdPlaylistPlay, _React$Component);

    function MdPlaylistPlay() {
        _classCallCheck(this, MdPlaylistPlay);

        _React$Component.apply(this, arguments);
    }

    MdPlaylistPlay.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 21.64l8.283333333333331 5-8.283333333333331 5v-10z m-25 3.3599999999999994v-3.3599999999999994h21.64v3.3599999999999994h-21.64z m28.28-16.64v3.283333333333333h-28.283333333333335v-3.283333333333333h28.28333333333333z m0 6.640000000000001v3.3599999999999994h-28.283333333333335v-3.3599999999999994h28.28333333333333z' })
            )
        );
    };

    return MdPlaylistPlay;
})(React.Component);

exports['default'] = MdPlaylistPlay;
module.exports = exports['default'];