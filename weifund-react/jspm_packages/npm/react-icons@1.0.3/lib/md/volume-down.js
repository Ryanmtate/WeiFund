/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVolumeDown = (function (_React$Component) {
    _inherits(MdVolumeDown, _React$Component);

    function MdVolumeDown() {
        _classCallCheck(this, MdVolumeDown);

        _React$Component.apply(this, arguments);
    }

    MdVolumeDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm8.360000000000001 15h6.639999999999999l8.36-8.360000000000001v26.71666666666667l-8.36-8.35666666666667h-6.639999999999999v-10z m22.5 5q0 4.609999999999999-4.216666666666669 6.716666666666669v-13.433333333333335q4.216666666666669 2.110000000000001 4.216666666666669 6.716666666666667z' })
            )
        );
    };

    return MdVolumeDown;
})(React.Component);

exports['default'] = MdVolumeDown;
module.exports = exports['default'];