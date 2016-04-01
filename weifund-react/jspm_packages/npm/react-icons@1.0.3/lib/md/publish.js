/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPublish = (function (_React$Component) {
    _inherits(MdPublish, _React$Component);

    function MdPublish() {
        _classCallCheck(this, MdPublish);

        _React$Component.apply(this, arguments);
    }

    MdPublish.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm8.360000000000001 23.36l11.639999999999999-11.716666666666667 11.64 11.716666666666667h-6.640000000000001v10h-10v-10h-6.639999999999999z m0-16.720000000000002h23.28333333333334v3.360000000000003h-23.285000000000004v-3.3599999999999994z' })
            )
        );
    };

    return MdPublish;
})(React.Component);

exports['default'] = MdPublish;
module.exports = exports['default'];