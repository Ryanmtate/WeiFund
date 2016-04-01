/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdInsertComment = (function (_React$Component) {
    _inherits(MdInsertComment, _React$Component);

    function MdInsertComment() {
        _classCallCheck(this, MdInsertComment);

        _React$Component.apply(this, arguments);
    }

    MdInsertComment.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 13.360000000000001v-3.360000000000001h-20v3.3599999999999994h20z m0 4.999999999999998v-3.3599999999999994h-20v3.3599999999999994h20z m0 5v-3.3599999999999994h-20v3.3599999999999994h20z m3.3599999999999994-20q1.3283333333333331 0 2.3049999999999997 0.9766666666666666t0.9750000000000014 2.3049999999999997v30l-6.640000000000001-6.641666666666666h-23.356666666666666q-1.328333333333334 0-2.3050000000000015-1.0133333333333319t-0.9766666666666666-2.3433333333333337v-20q0-1.3283333333333331 0.9766666666666666-2.3049999999999997t2.3049999999999997-0.9766666666666666h26.71666666666667z' })
            )
        );
    };

    return MdInsertComment;
})(React.Component);

exports['default'] = MdInsertComment;
module.exports = exports['default'];