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
                React.createElement('path', { d: 'm21.64 15h9.216666666666669l-9.216666666666669-9.14v9.14z m-11.64-11.64h13.36l10 10v20q0 1.3283333333333331-1.0166666666666657 2.3049999999999997t-2.3416666666666686 0.9750000000000014h-20.001666666666665q-1.3266666666666662 0-2.341666666666667-0.9766666666666666t-1.0166666666666666-2.306666666666665l0.08000000000000007-26.71666666666667q0-1.33 0.9766666666666666-2.3066666666666666t2.3016666666666667-0.9733333333333336z' })
            )
        );
    };

    return MdInsertDriveFile;
})(React.Component);

exports['default'] = MdInsertDriveFile;
module.exports = exports['default'];