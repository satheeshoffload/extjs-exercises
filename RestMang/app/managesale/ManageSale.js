Ext.define('RestMang.managesale.ManageSale',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.managesale',	
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'managesalegrid'
		}]
	}
});