Ext.define('Register.contact.ContactController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.contact',
    showWindow:function(){
        Ext.widget('contactwindow');
    },
    onClickSend : function(){
        var contactForm = this.lookupReference('contactForm');

        contactForm.isValid();
    }
});