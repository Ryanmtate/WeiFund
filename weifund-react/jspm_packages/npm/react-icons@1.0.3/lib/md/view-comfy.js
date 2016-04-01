/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewComfy = (function (_React$Component) {
    _inherits(MdViewComfy, _React$Component);

    function MdViewComfy() {
        _classCallCheck(this, MdViewComfy);

        _React$Component.apply(this, arguments);
    }

    MdViewComfy.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 15h6.7v-6.7h-6.7v6.7z m0 8.3h6.7v-6.6h-6.7v6.6z m8.3 0h6.7v-6.6h-6.7v6.6z m8.4 0h6.6v-6.6h-6.6v6.6z m-8.4-8.3h6.7v-6.7h-6.7v6.7z m8.4-6.7v6.7h6.6v-6.7h-6.6z m8.3 15h6.7v-6.6h-6.7v6.6z m-25 8.4h6.7v-6.7h-6.7v6.7z m8.3 0h6.7v-6.7h-6.7v6.7z m8.4 0h6.6v-6.7h-6.6v6.7z m8.3 0h6.7v-6.7h-6.7v6.7z m0-23.4v6.7h6.7v-6.7h-6.7z' })
            )
        );
    };

    return MdViewComfy;
})(React.Component);

exports['default'] = MdViewComfy;
module.exports = exports['default'];