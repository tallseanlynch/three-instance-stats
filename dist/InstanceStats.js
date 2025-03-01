import React, { useEffect, useState, useCallback } from 'react';
import { instances } from './index';
import './instance-stats.css';
var InstanceStats = function (_a) {
    var _b = _a.updateTimeMS, updateTimeMS = _b === void 0 ? 500 : _b, _c = _a.stats, stats = _c === void 0 ? [] : _c, _d = _a.showAll, showAll = _d === void 0 ? false : _d;
    var _e = useState({}), instanceStats = _e[0], setInstanceStats = _e[1];
    var _f = useState(true), visible = _f[0], setVisible = _f[1];
    var handleVisibleClick = useCallback(function () {
        setVisible(function (current) { return !current; });
    }, []);
    useEffect(function () {
        var interval = setInterval(function () {
            setInstanceStats(instances());
        }, updateTimeMS);
        return function () { return clearInterval(interval); };
    }, [updateTimeMS]);
    var statsToShow = Object.keys(instanceStats)
        .filter(function (instanceStat) { return instanceStats[instanceStat] > 0 || showAll === true; })
        .filter(function (instanceStat) { return stats.indexOf(instanceStat) > -1 || (stats.length === 0 && instanceStats[instanceStat] > 0) || showAll === true; });
    return (React.createElement("div", { className: "instance-stats-container ".concat(statsToShow.length > 25 && visible === true ? 'length-25-plus' : '') },
        React.createElement("div", { className: 'instance-stats-button' },
            React.createElement("button", { onClick: handleVisibleClick }, visible === true ? 'Hide Instance Stats' : 'Show Instance Stats')),
        visible === true &&
            React.createElement("div", { className: 'instance-stats-text', style: { width: Math.ceil(statsToShow.length / 25) * 225 } }, statsToShow.map(function (instanceStat, index) {
                return (React.createElement("div", { className: "instance-stat ".concat(index % 2 === 0 ? 'gray-stat' : ''), key: instanceStat },
                    React.createElement("span", { className: "stat-name" },
                        instanceStat,
                        ":"),
                    React.createElement("span", { className: "stat-value" }, instanceStats[instanceStat])));
            }))));
};
export { InstanceStats };
