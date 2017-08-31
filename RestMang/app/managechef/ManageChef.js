Ext.define('RestMang.managechef.ManageChef',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.managechef',	
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'managechefgrid'
		}]
	}
});