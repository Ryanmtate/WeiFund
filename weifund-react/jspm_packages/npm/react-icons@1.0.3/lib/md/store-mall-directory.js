/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdStoreMallDirectory = (function (_React$Component) {
    _inherits(MdStoreMallDirectory, _React$Component);

    function MdStoreMallDirectory() {
        _classCallCheck(this, MdStoreMallDirectory);

        _React$Component.apply(this, arguments);
    }

    MdStoreMallDirectory.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 6.7h-26.6v3.3h26.6v-3.3z m1.7 16.6v-3.3l-1.7-8.3h-26.6l-1.7 8.3v3.3h1.7v10h16.6v-10h6.7v10h3.3v-10h1.7z m-15 6.7h-10v-6.7h10v6.7z' })
            )
        );
    };

    return MdStoreMallDirectory;
})(React.Component);

exports['default'] = MdStoreMallDirectory;
module.exports = exports['default'];