Ext.define('RestMang.main.Main',{
	extend   : 'Ext.panel.Panel',
	alias    : 'widget.main',
	requires : [
		'RestMang.main.MainController'
	],
	controller    : 'main',
	layout        : 'border',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			region      : 'north',
			width       : 70,
			xtype       : 'app-header'
		},{
			region      : 'west',
			width       : 300,
			collapsible : true,
			split       : true,
			xtype       : 'treepanel',
			title       : 'Manage RestMang',			
    		useArrows   : true,
    		store       : this.buildMenuStore(),
    		rootVisible : false,
    		listeners   : {
    			itemclick  : 'onClickTreePanelMenuItem'
    		}
		},{
			region    : 'center',
			xtype     : 'tabpanel',
    		width     : '100%',
    		height    : '100%',
    		layout    : 'fit',			
			reference : 'masterTabPanel' 
		}]
	},
	buildMenuStore : function(){
		var store, menuOptions;

		menuOptions = [{ 
        	text : 'Manage Order', 
        	view : 'manageorder',
        	leaf : true 
        },{ 
        	text : 'Manage Supplier', 
        	view : 'managesupplier',        	
        	leaf : true 
        },{ 
        	text : 'Manage Chef', 
        	view : 'managechef',        	
        	leaf : true 
        },{ 
        	text : 'Manage Bill', 
        	view : 'managebill',        	
        	leaf : true 
        },{ 
        	text : 'Manage Sale', 
        	view : 'managesale',        	
        	leaf : true 
        }];

		store = Ext.create('Ext.data.TreeStore', {
		    root: {
		        expanded: true,
		        children: menuOptions
		    }
		});

		return store;
	}
});