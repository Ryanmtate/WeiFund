/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGitBranchCreate = (function (_React$Component) {
    _inherits(GoOcticonGitBranchCreate, _React$Component);

    function GoOcticonGitBranchCreate() {
        _classCallCheck(this, GoOcticonGitBranchCreate);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGitBranchCreate.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 12.5c0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v0.7c0 1.3-0.6 2.5-1.6 3.5s-2.1 1.5-3.4 1.5c-2.1 0.1-3.7 0.4-5 1.2v-11.9c1.5-0.9 2.5-2.5 2.5-4.3 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v16.4c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.3-0.5-2.5-1.3-3.4 0.2-0.2 1.2-1 1.5-1.2 0.6-0.2 1.4-0.4 2.3-0.4 2.6-0.1 4.9-1.1 6.9-3.1s3-5 3.1-7.6h0c1.5-0.9 2.5-2.5 2.5-4.3z m-20-8c1.6 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.4-3 3-3z m0 31c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z m15-20c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z' })
            )
        );
    };

    return GoOcticonGitBranchCreate;
})(React.Component);

exports['default'] = GoOcticonGitBranchCreate;
module.exports = exports['default'];