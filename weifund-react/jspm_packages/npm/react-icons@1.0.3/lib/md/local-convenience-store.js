/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalConvenienceStore = (function (_React$Component) {
    _inherits(MdLocalConvenienceStore, _React$Component);

    function MdLocalConvenienceStore() {
        _classCallCheck(this, MdLocalConvenienceStore);

        _React$Component.apply(this, arguments);
    }

    MdLocalConvenienceStore.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 11.7v-5h-23.4v5h-5v21.6h13.4v-6.6h6.6v6.6h13.4v-21.6h-5z m-13.4 5h-3.3v1.6h3.3v1.7h-5v-5h3.4v-1.7h-3.4v-1.6h5v5z m8.4 3.3h-1.7v-3.3h-3.3v-5h1.6v3.3h1.7v-3.3h1.7v8.3z' })
            )
        );
    };

    return MdLocalConvenienceStore;
})(React.Component);

exports['default'] = MdLocalConvenienceStore;
module.exports = exports['default'];