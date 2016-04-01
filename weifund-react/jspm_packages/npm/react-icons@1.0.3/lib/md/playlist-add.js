/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPlaylistAdd = (function (_React$Component) {
    _inherits(MdPlaylistAdd, _React$Component);

    function MdPlaylistAdd() {
        _classCallCheck(this, MdPlaylistAdd);

        _React$Component.apply(this, arguments);
    }

    MdPlaylistAdd.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3600000000000003 26.64v-3.2833333333333314h13.283333333333335v3.2833333333333314h-13.283333333333333z m26.64-3.280000000000001h6.640000000000001v3.2833333333333314h-6.640000000000001v6.716666666666669h-3.3599999999999994v-6.716666666666669h-6.640000000000001v-3.2833333333333314h6.640000000000001v-6.716666666666669h3.3599999999999994v6.716666666666669z m-6.640000000000001-13.36v3.3599999999999994h-20v-3.3599999999999994h20z m0 6.640000000000001v3.3599999999999994h-20v-3.3599999999999994h20z' })
            )
        );
    };

    return MdPlaylistAdd;
})(React.Component);

exports['default'] = MdPlaylistAdd;
module.exports = exports['default'];