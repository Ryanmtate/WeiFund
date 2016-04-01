/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileSymlinkFile = (function (_React$Component) {
    _inherits(GoFileSymlinkFile, _React$Component);

    function GoFileSymlinkFile() {
        _classCallCheck(this, GoFileSymlinkFile);

        _React$Component.apply(this, arguments);
    }

    GoFileSymlinkFile.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 2.5h-22.5v35h30v-27.5l-7.5-7.5z m5 32.5h-25v-30h17.5l7.5 7.5v22.5z m-12.5-17.5c-5.82 0-10 4.337499999999999-10 12.5 1.25-5.3125 5.1175-7.5 10-7.5v5l10-7.5-10-7.5v5z' })
            )
        );
    };

    return GoFileSymlinkFile;
})(React.Component);

exports['default'] = GoFileSymlinkFile;
module.exports = exports['default'];