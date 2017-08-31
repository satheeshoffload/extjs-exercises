Ext.define('Form.main.Main',{
    extend : 'Ext.form.Panel',
    alias : 'widget.main',
    controller : 'main',
    items     : [{
        xtype     : 'form',
        title     : 'Data Entry Form',
        bodyPadding : 20,
        width     : 500,
        height    : 500,
        items     : [{
            xtype      : 'textfield',
            fieldLabel : 'Order Number',
            name : 'ordernumber',
            reference : 'ordernumber',
            value : '10',
            allowBlank : 'false'
        },{
            xtype : 'textfield',
            fieldLabel : 'Order Name',
            name : 'ordername',
            refrence : 'ordername',
            value : 'biscuits',
            allowBlank : 'false'
        },{
            xtype : 'numberfield',
            fieldLabel : 'Order Quantity',
            maxValue : '99',
            minValue : '1'
        },{
            xtype : 'combobox',
            fieldLabel : 'Order Type',
            name : 'ordertype',
            reference : 'ordertype'
        }],
        buttons    :[{
            text    : 'Submit',
            handler : 'onClickSubmit'
                
        }]
    }]
});