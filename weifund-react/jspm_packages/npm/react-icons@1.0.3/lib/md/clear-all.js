/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdClearAll = (function (_React$Component) {
    _inherits(MdClearAll, _React$Component);

    function MdClearAll() {
        _classCallCheck(this, MdClearAll);

        _React$Component.apply(this, arguments);
    }

    MdClearAll.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.64 11.64h23.36v3.3599999999999994h-23.36v-3.3599999999999994z m-6.640000000000001 16.72v-3.3599999999999994h23.36v3.3599999999999994h-23.36z m3.3599999999999994-6.719999999999999v-3.2833333333333314h23.283333333333335v3.2833333333333314h-23.285000000000004z' })
            )
        );
    };

    return MdClearAll;
})(React.Component);

exports['default'] = MdClearAll;
module.exports = exports['default'];