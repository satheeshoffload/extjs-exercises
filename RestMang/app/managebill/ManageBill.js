Ext.define('RestMang.managebill.ManageBill',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.managebill',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'managebillgrid'
		}]
	}
});