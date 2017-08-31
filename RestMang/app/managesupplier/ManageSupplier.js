Ext.define('RestMang.managesupplier.ManageSupplier',{
	extend  : 'Ext.panel.Panel',
	alias   : 'widget.managesupplier',	
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',		
			gridId    : 'managesuppliergrid'
		}]
	}
});