/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVideoLibrary = (function (_React$Component) {
    _inherits(MdVideoLibrary, _React$Component);

    function MdVideoLibrary() {
        _classCallCheck(this, MdVideoLibrary);

        _React$Component.apply(this, arguments);
    }

    MdVideoLibrary.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.7 10h-3.4v23.3c0 1.9 1.5 3.4 3.4 3.4h23.3v-3.4h-23.3v-23.3z m26.6-6.7h-20c-1.8 0-3.3 1.5-3.3 3.4v20c0 1.8 1.5 3.3 3.3 3.3h20c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.9-1.5-3.4-3.4-3.4z m-13.3 20.9v-15l10 7.5-10 7.5z' })
            )
        );
    };

    return MdVideoLibrary;
})(React.Component);

exports['default'] = MdVideoLibrary;
module.exports = exports['default'];