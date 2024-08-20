using { nagesh.db.master, nagesh.db.transaction } from '../db/datamodel';

 
 
service CatalogService @(path: 'CatalogService') {
 
    entity ProductSet @(odata.draft.enabled:true) as projection on master.product;
    entity POItemset as projection on transaction.poitems;
    entity PoSet @(odata.draft.enabled:true) as projection on transaction.purchaseorder;
}