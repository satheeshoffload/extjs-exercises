Ext.define('RestMang.manageorder.ManageOrder',{
	extend     : 'Ext.panel.Panel',
	alias      : 'widget.manageorder',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'manageordergrid'
		}]
	}
});