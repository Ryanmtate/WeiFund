/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdToc = (function (_React$Component) {
    _inherits(MdToc, _React$Component);

    function MdToc() {
        _classCallCheck(this, MdToc);

        _React$Component.apply(this, arguments);
    }

    MdToc.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 21.64v-3.2833333333333314h3.359999999999996v3.2833333333333314h-3.3599999999999994z m0-10h3.359999999999996v3.3599999999999994h-3.3599999999999994v-3.3599999999999994z m0 16.720000000000002v-3.360000000000003h3.359999999999996v3.3599999999999994h-3.3599999999999994z m-26.640000000000004-3.552713678800501e-15v-3.3599999999999994h23.36v3.3599999999999994h-23.36z m0-6.719999999999999v-3.2833333333333314h23.36v3.2833333333333314h-23.36z m0-6.640000000000001v-3.3599999999999994h23.36v3.3599999999999994h-23.36z' })
            )
        );
    };

    return MdToc;
})(React.Component);

exports['default'] = MdToc;
module.exports = exports['default'];