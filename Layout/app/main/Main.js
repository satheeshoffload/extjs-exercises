Ext.define('Layout.main.Main',{
    extend :'Ext.panel.Panel',
    xtype :'layout-border',
    requires :[
        'Ext.layout.container.Border'
    ],   
    layout : 'border',
    height : 100,
    width : 400,
    bodyBorder : true,
    defaults : {
        collapsible : true,
        split : true,
        bodyPadding : 10
    },
    items : [{
        title : 'Footer',
        region :'south',
        height : 50,
        minHeight : 25,
        maxHeight : 75,
        html : '<p>Footer Content</p>'
    },{
        title : 'Navigation',
        region : 'west',
        width : 125,
        minWidth : 100,
        maxWidth : 150,
        margin : '5 0 0 0',
        floatable : false,
        html : '<p> Navigation Content here in west</P'
    },{
        title : 'Main Page',
        region : 'center',
        margin : '5 0 0 0',
        coolapsible : false,
        html :'<p> This is Main Page content it has wide area in this layout</p>'
    }]
   


})