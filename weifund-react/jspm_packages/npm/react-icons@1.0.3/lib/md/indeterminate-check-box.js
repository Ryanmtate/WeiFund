/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdIndeterminateCheckBox = (function (_React$Component) {
    _inherits(MdIndeterminateCheckBox, _React$Component);

    function MdIndeterminateCheckBox() {
        _classCallCheck(this, MdIndeterminateCheckBox);

        _React$Component.apply(this, arguments);
    }

    MdIndeterminateCheckBox.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement(
                    'defs',
                    null,
                    React.createElement('path', { id: 'a', d: 'm0 0h40v40h-40z' })
                ),
                React.createElement(
                    'clipPath',
                    { id: 'b' },
                    React.createElement('use', { overflow: 'visible' })
                ),
                React.createElement('path', { d: 'm31.7 5h-23.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-3.4 16.7h-16.6v-3.4h16.6v3.4z' })
            )
        );
    };

    return MdIndeterminateCheckBox;
})(React.Component);

exports['default'] = MdIndeterminateCheckBox;
module.exports = exports['default'];