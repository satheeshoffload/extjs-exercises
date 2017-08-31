Ext.define('Toolbar.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'docked-toolbars',
    id: 'docked-toolbars',

    layout: {
        type: 'table',
        columns: 2,
        tdAttrs: { style: 'padding: 10px;' }
    },

    defaults: {
        xtype: 'panel',
        height: 220,
        width: 220,
        bodyPadding: 10
    },
    width: 480,

    initComponent: function() {
        this.items = [
            {
                title: 'Top',
                xtype: 'panel',
                dockedItems: [{
                    dock: 'top',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: null,
                        glyph: 61,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 88,
                        xtype: 'button'
                    }, {
                        iconCls: null,
                        glyph: 70,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 47,
                        xtype: 'button'
                    }]
                }],
                html: 'Avul Pakir Jainulabdeen Abdul Kalam better known as A. P. J. Abdul Kalam was the 11th President of India from 2002 to 2007.'
            },
            {
                title: 'Right',
                xtype: 'panel',
                dockedItems: [{
                    dock: 'right',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: null,
                        glyph: 61,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 88,
                        xtype: 'button'
                    }, {
                        iconCls: null,
                        glyph: 70,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 47,
                        xtype: 'button'
                    }]
                }],
                html: 'Avul Pakir Jainulabdeen Abdul Kalam better known as A. P. J. Abdul Kalam was the 11th President of India from 2002 to 2007.'
            },
            {
                title: 'Left',
                xtype: 'panel',
                dockedItems: [{
                    dock: 'left',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: null,
                        glyph: 61,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 88,
                        xtype: 'button'
                    }, {
                        iconCls: null,
                        glyph: 70,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 47,
                        xtype: 'button'
                    }]
                }],
                html: 'Avul Pakir Jainulabdeen Abdul Kalam better known as A. P. J. Abdul Kalam was the 11th President of India from 2002 to 2007.'
            },
            {
                title: 'Bottom',
                xtype: 'panel',
                dockedItems: [{
                    dock: 'bottom',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: null,
                        glyph: 61,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 88,
                        xtype: 'button'
                    }, {
                        iconCls: null,
                        glyph: 70,
                        xtype: 'button'
                    }, '-', {
                        iconCls: null,
                        glyph: 47,
                        xtype: 'button'
                    }]
                }],
                html: 'Avul Pakir Jainulabdeen Abdul Kalam better known as A. P. J. Abdul Kalam was the 11th President of India from 2002 to 2007.'
            }
        ];

        this.callParent();
    }
});