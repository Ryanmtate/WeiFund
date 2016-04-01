/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSwapVert = (function (_React$Component) {
    _inherits(MdSwapVert, _React$Component);

    function MdSwapVert() {
        _classCallCheck(this, MdSwapVert);

        _React$Component.apply(this, arguments);
    }

    MdSwapVert.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 5l6.640000000000001 6.640000000000001h-5v11.716666666666669h-3.283333333333333v-11.716666666666667h-5z m11.64 23.36h5l-6.640000000000001 6.640000000000001-6.640000000000001-6.640000000000001h5v-11.716666666666669h3.2833333333333314v11.716666666666669z' })
            )
        );
    };

    return MdSwapVert;
})(React.Component);

exports['default'] = MdSwapVert;
module.exports = exports['default'];