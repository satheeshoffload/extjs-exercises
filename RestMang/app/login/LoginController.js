Ext.define('RestMang.login.LoginController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.login',
	onClickSubmit : function(){
		var me = this;

		me.getView().close();
		Ext.create('Ext.container.Viewport',{
			layout : 'fit',
			items  : [{
				xtype : 'main'
			}]
		});
	},
	onClickReset : function(){

	}
});