/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdZoomOutMap = (function (_React$Component) {
    _inherits(MdZoomOutMap, _React$Component);

    function MdZoomOutMap() {
        _classCallCheck(this, MdZoomOutMap);

        _React$Component.apply(this, arguments);
    }

    MdZoomOutMap.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 25v10h-10l3.828333333333333-3.828333333333333-4.843333333333334-4.766666666666666 2.423333333333332-2.4200000000000017 4.766666666666666 4.844999999999999z m-20 10h-10v-10l3.828333333333333 3.828333333333333 4.766666666666666-4.843333333333334 2.4200000000000017 2.423333333333332-4.845000000000001 4.766666666666666z m-10-20v-10h10l-3.828333333333333 3.828333333333333 4.843333333333334 4.766666666666666-2.423333333333334 2.4200000000000017-4.7666666666666675-4.845000000000001z m20-10h10v10l-3.828333333333333-3.828333333333333-4.766666666666666 4.843333333333334-2.4200000000000017-2.423333333333334 4.844999999999999-4.7666666666666675z' })
            )
        );
    };

    return MdZoomOutMap;
})(React.Component);

exports['default'] = MdZoomOutMap;
module.exports = exports['default'];