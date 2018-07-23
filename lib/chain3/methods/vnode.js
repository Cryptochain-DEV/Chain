/*
    This file is part of chain3.js.

    chain3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    chain3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with chain3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file vnode.js
 * Developing
 * @MOAC lab
 * @date 2018
 *
 */

"use strict";

// var Method = require('../method');
var Property = require('../property');

var VNODE = function (chain3) {
    this._requestManager = chain3._requestManager;

    var self = this;
    
    // methods().forEach(function(method) { 
    //     method.attachToObject(self);
    //     method.setRequestManager(chain3._requestManager);
    // });

    //Save the properties
    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
};

// grpcCfg, serviceCfg, address, setVnodeAddress
var properties = function () {
    return [
        new Property({
            name: 'grpcCfg',
            getter: 'vnode_grpcCfg'
        }),
        new Property({
            name: 'serviceCfg',
            getter: 'vnode_serviceCfg'
        }),
        new Property({
            name: 'address',
            getter: 'vnode_address',

        }),
        new Property({
            name: 'scsService',
            getter: 'vnode_scsService',

        })
    ];
};


module.exports = VNODE;
