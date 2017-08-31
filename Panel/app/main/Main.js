Ext.define('Panel.main.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main',
    xtype: 'panel-header-position',    
    width: 300,
    layout: 'column',
    viewModel: true,

    defaults: {
        bodyPadding: 10,
        height: 200,
        scrollable: true
    },

    initComponent: function () {

        this.bodyStyle = "background: transparent";

        this.tbar = [
            {
                xtype: 'label',
                text: 'Header Position:'
            },
            {
                xtype: 'segmentedbutton',
                reference: 'positionBtn',
                value: 'top',
                defaultUI: 'default',
                items: [{
                    text: 'Top',
                    value: 'top'
                }, {
                    text: 'Right',
                    value: 'right'
                }, {
                    text: 'Bottom',
                    value: 'bottom'
                }, {
                    text: 'Left',
                    value: 'left'
                }]
            }
        ];

        this.items = [{
            columnWidth: 0.25,
            margin: "5 0.25 0 0",
            title: 'Panel',
            icon: null,
            glyph: 117,
            html: 'Learn about the basics of app building with Sencha Ext JS',
            bind: {
                headerPosition: '{positionBtn.value}'
            }
        }, {
            columnWidth: 0.25,
            margin: "5 0 0 0.25",
            frame: true,
            title: 'Framed Panel',
            icon: null,
            glyph: 117,
            html: 'Learn about the basics of app building with Sencha Ext JS',
            bind: {
                headerPosition: '{positionBtn.value}'
            }
        }];

        this.callParent();
    }
});

