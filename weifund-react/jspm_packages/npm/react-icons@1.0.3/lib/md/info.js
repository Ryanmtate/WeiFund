/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdInfo = (function (_React$Component) {
    _inherits(MdInfo, _React$Component);

    function MdInfo() {
        _classCallCheck(this, MdInfo);

        _React$Component.apply(this, arguments);
    }

    MdInfo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 15v-3.3599999999999994h-3.2833333333333314v3.3599999999999994h3.2833333333333314z m0 13.36v-10h-3.2833333333333314v10h3.2833333333333314z m-1.6400000000000006-25q6.875 0 11.758333333333333 4.883333333333333t4.883333333333333 11.756666666666668-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z' })
            )
        );
    };

    return MdInfo;
})(React.Component);

exports['default'] = MdInfo;
module.exports = exports['default'];