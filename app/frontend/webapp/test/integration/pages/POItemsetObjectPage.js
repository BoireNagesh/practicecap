sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ust.nagesh.frontend',
            componentId: 'POItemsetObjectPage',
            contextPath: '/PoSet/Items'
        },
        CustomPageDefinitions
    );
});