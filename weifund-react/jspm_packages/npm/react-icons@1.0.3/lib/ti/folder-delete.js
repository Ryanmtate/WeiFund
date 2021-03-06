/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiFolderDelete = (function (_React$Component) {
    _inherits(TiFolderDelete, _React$Component);

    function TiFolderDelete() {
        _classCallCheck(this, TiFolderDelete);

        _React$Component.apply(this, arguments);
    }

    TiFolderDelete.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 10h-10c0-1.8399999999999999-1.4933333333333323-3.333333333333334-3.333333333333332-3.333333333333334h-6.666666666666668c-2.756666666666666 8.881784197001252e-16-5 2.243333333333334-5 5.000000000000002v16.666666666666668c0 2.7566666666666677 2.243333333333334 5 5 5h20c2.7566666666666677 0 5-2.2433333333333323 5-5v-13.333333333333336c0-2.7566666666666677-2.2433333333333323-5-5-5z m-20 0h6.666666666666668c0 1.8399999999999999 1.4933333333333323 3.333333333333334 3.333333333333332 3.333333333333334h10c0.9200000000000017 0 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.666666666666666h-23.333333333333336v-3.333333333333332c1.7763568394002505e-15-0.9199999999999999 0.7466666666666679-1.666666666666666 1.6666666666666679-1.666666666666666z m20 20h-20c-0.9199999999999999 0-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679v-11.666666666666668h23.333333333333336v11.666666666666668c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679z m-5-6.666666666666664h-10c-0.9216666666666669 0-1.666666666666666-0.745000000000001-1.666666666666666-1.6666666666666679s0.7449999999999992-1.6666666666666679 1.666666666666666-1.6666666666666679h10c0.9216666666666669 0 1.6666666666666679 0.745000000000001 1.6666666666666679 1.6666666666666679s-0.745000000000001 1.6666666666666679-1.6666666666666679 1.6666666666666679z' })
            )
        );
    };

    return TiFolderDelete;
})(React.Component);

exports['default'] = TiFolderDelete;
module.exports = exports['default'];