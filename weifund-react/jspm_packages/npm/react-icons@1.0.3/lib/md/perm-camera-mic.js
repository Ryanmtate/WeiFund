/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPermCameraMic = (function (_React$Component) {
    _inherits(MdPermCameraMic, _React$Component);

    function MdPermCameraMic() {
        _classCallCheck(this, MdPermCameraMic);

        _React$Component.apply(this, arguments);
    }

    MdPermCameraMic.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 8.3h-5.2l-3.1-3.3h-10l-3 3.3h-5.3c-1.9 0-3.4 1.5-3.4 3.4v20c0 1.8 1.5 3.3 3.4 3.3h11.6v-3.5c-4.7-0.8-8.3-4.9-8.3-9.8h3.3c0 3.6 3 6.6 6.7 6.6s6.7-3 6.7-6.6h3.3c0 4.9-3.6 9-8.3 9.8v3.5h11.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.9-1.5-3.4-3.4-3.4z m-10 13.4c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3v-6.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v6.7z' })
            )
        );
    };

    return MdPermCameraMic;
})(React.Component);

exports['default'] = MdPermCameraMic;
module.exports = exports['default'];