Ext.define('Form.main.MainController',{
    extend:'Ext.app.ViewController',
    alias:'controller.main',
    onClickSubmit : function(){
        var references =this.getReferences(); 
        var result;
        if(references.ordernumber.value == '10'){
            result = references.ordernumber.value;
        }
        if(references.ordertype.value == 'biscuits'){
            result = references.ordertype.value;
        }
        
    }
})