/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhoto = (function (_React$Component) {
    _inherits(MdPhoto, _React$Component);

    function MdPhoto() {
        _classCallCheck(this, MdPhoto);

        _React$Component.apply(this, arguments);
    }

    MdPhoto.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm14.14 22.5l-5.783333333333333 7.5h23.28333333333333l-7.5-10-5.783333333333335 7.5z m20.86 9.140000000000004q0 1.3283333333333367-1.0166666666666657 2.34333333333333t-2.3416666666666686 1.0166666666666657h-23.28333333333333q-1.3266666666666689 0-2.3416666666666686-1.0166666666666657t-1.0166666666666657-2.34333333333333v-23.28333333333334q0-1.3266666666666653 1.0166666666666666-2.341666666666665t2.3433333333333346-1.0150000000000006h23.28333333333334q1.326666666666668 0 2.3416666666666686 1.0166666666666666t1.0149999999999935 2.3400000000000007v23.28333333333333z' })
            )
        );
    };

    return MdPhoto;
})(React.Component);

exports['default'] = MdPhoto;
module.exports = exports['default'];