Ext.define('Register.contact.ContactWindow',{
    extend: 'Ext.Window',
    alias: 'widget.contactwindow',
    title:'contact window',
    width:600,
    height:500,
    autoShow: true,
    items :[{
        xtype: 'form',
        reference: 'contactForm',
        border:false,
        bodyPadding:30,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },        
        fieldDefaults: {
            msgTarget: 'side',
            labelAlign: 'top',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },
        items :[{
            xtype: 'fieldcontainer',
            layout:'hbox',
            fieldLabel:'Your Name',
            items:[{
                xtype:'textfield',
                fieldLabel:'First',
                allowBlank: false,
                afterLabelTextTpl: [
                    '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                ]
            },{
                xtype : 'textfield',
                fieldLabel: 'MI',
                margin: '0 0 0 5',
            },{
                xtype : 'textfield',
                fieldLabel: 'Last',
                margin: '0 0 0 5',
                afterLabelTextTpl: [
                    '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                ]
            }]
        },{
            xtype:'textfield',
            fieldLabel:'Your Email Address',
            afterLabelTextTpl: [
                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
            ]
        },{
            xtype:'textfield',
            fieldLabel:'Subject',
            afterLabelTextTpl: [
                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
            ],
            vtype: 'email',
            allowBlank: false
        },{
            xtype:'textareafield',
            fieldLabel:'Message',
            afterLabelTextTpl: [
                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
            ]
        }]
    }],
    buttons:[{
        text:'Send',
        handler : 'onClickSend'
    },{
        text:'Cancel'
    }]    
});