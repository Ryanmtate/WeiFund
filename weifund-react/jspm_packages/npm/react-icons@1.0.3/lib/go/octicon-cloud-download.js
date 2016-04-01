/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCloudDownload = (function (_React$Component) {
    _inherits(GoOcticonCloudDownload, _React$Component);

    function GoOcticonCloudDownload() {
        _classCallCheck(this, GoOcticonCloudDownload);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCloudDownload.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 32.5h5l-7.5 7.5-7.5-7.5h5v-12.5h5v12.5z m7.5-20c0-1.1-2.3-7.5-11.2-7.5-6.1 0-11.3 4.8-11.3 10-5 0-7.5 3.8-7.5 7.5 0 3.8 2.5 7.5 7.5 7.5h7.5v-3.2h-7.5c-4.1 0-4.3-3.6-4.3-4.3 0-0.4 0.2-4.3 4.3-4.3h3.2v-3.2c0-3.5 3.9-6.8 8.1-6.8 6.3 0 7.8 3.9 8 4.5v3h3.2c2 0 6.8 0.6 6.8 5.5 0 5.3-5.7 5.6-6.8 5.6h-5v3.2h5c5.2 0 10-2.9 10-8.8 0-6-4.8-8.7-10-8.7z' })
            )
        );
    };

    return GoOcticonCloudDownload;
})(React.Component);

exports['default'] = GoOcticonCloudDownload;
module.exports = exports['default'];