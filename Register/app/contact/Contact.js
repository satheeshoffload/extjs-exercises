Ext.define('Register.contact.Contact',{
    extend : 'Ext.form.Panel',
    alias  : 'widget.contact',
    controller: 'contact',
    title  : 'Contact Form',
    bodyPadding: 20,

    items: [{
        margin: '0 0 20 0',
        xtype: 'component',
        html: [
            'Thank you for visiting our site! We welcome your feedback; ',
            'please click the button below to send us a message. We will ',
            'respond to your inquiry as quickly as possible.'
        ]
    }, {
        xtype: 'container',
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        items: [{
            xtype: 'button',
            cls: 'contactBtn',
            scale: 'large',
            text: 'Contact Us',
            handler: 'showWindow'
        }]
    }]
});
