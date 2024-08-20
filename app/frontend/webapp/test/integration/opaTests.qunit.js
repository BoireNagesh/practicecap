sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/nagesh/frontend/test/integration/FirstJourney',
		'ust/nagesh/frontend/test/integration/pages/PoSetList',
		'ust/nagesh/frontend/test/integration/pages/PoSetObjectPage',
		'ust/nagesh/frontend/test/integration/pages/POItemsetObjectPage'
    ],
    function(JourneyRunner, opaJourney, PoSetList, PoSetObjectPage, POItemsetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/nagesh/frontend') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePoSetList: PoSetList,
					onThePoSetObjectPage: PoSetObjectPage,
					onThePOItemsetObjectPage: POItemsetObjectPage
                }
            },
            opaJourney.run
        );
    }
);