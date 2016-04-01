/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalGroceryStore = (function (_React$Component) {
    _inherits(MdLocalGroceryStore, _React$Component);

    function MdLocalGroceryStore() {
        _classCallCheck(this, MdLocalGroceryStore);

        _React$Component.apply(this, arguments);
    }

    MdLocalGroceryStore.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.7 30c-1.9 0-3.3 1.5-3.3 3.3s1.4 3.4 3.3 3.4 3.3-1.5 3.3-3.4-1.5-3.3-3.3-3.3z m-10-26.7v3.4h3.3l6 12.6-2.2 4.1c-0.3 0.5-0.5 1-0.5 1.6 0 1.8 1.5 3.3 3.4 3.3h20v-3.3h-19.3c-0.3 0-0.4-0.2-0.4-0.4l0-0.2 1.5-2.7h12.4c1.3 0 2.4-0.7 2.9-1.8l6-10.8c0.1-0.2 0.2-0.5 0.2-0.8 0-0.9-0.7-1.6-1.7-1.6h-24.6l-1.6-3.4h-5.4z m26.6 26.7c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4 3.4-1.5 3.4-3.4-1.5-3.3-3.4-3.3z' })
            )
        );
    };

    return MdLocalGroceryStore;
})(React.Component);

exports['default'] = MdLocalGroceryStore;
module.exports = exports['default'];