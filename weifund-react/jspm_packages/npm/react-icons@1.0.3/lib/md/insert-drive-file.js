/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdInsertDriveFile = (function (_React$Component) {
    _inherits(MdInsertDriveFile, _React$Component);

    function MdInsertDriveFile() {
        _classCallCheck(this, MdInsertDriveFile);

        _React$Component.apply(this, arguments);
    }

    MdInsertDriveFile.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 3.3c-1.8 0-3.3 1.5-3.3 3.4l0 26.6c0 1.9 1.5 3.4 3.3 3.4h20c1.8 0 3.3-1.5 3.3-3.4v-20l-10-10h-13.3z m11.7 11.7v-9.2l9.1 9.2h-9.1z' })
            )
        );
    };

    return MdInsertDriveFile;
})(React.Component);

exports['default'] = MdInsertDriveFile;
module.exports = exports['default'];