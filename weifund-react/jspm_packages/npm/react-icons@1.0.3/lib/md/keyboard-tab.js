/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdKeyboardTab = (function (_React$Component) {
    _inherits(MdKeyboardTab, _React$Component);

    function MdKeyboardTab() {
        _classCallCheck(this, MdKeyboardTab);

        _React$Component.apply(this, arguments);
    }

    MdKeyboardTab.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 10h3.2833333333333314v20h-3.2833333333333314v-20z m-14.063333333333333 2.3433333333333337l2.3433333333333337-2.3433333333333337 10 10-10 10-2.3433333333333337-2.3433333333333337 6.016666666666666-6.016666666666666h-23.675v-3.280000000000001h23.671666666666667z' })
            )
        );
    };

    return MdKeyboardTab;
})(React.Component);

exports['default'] = MdKeyboardTab;
module.exports = exports['default'];