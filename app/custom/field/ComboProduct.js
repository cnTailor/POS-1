Ext.define('POS.custom.field.ComboProduct', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.combo-product',

    requires: [
        'Ext.tpl.combo.Product',
        'POS.store.combo.Product'
    ],

    displayField: 'name',
    valueField: 'id',

    anyMatch: true,
    autoSelect: false,
    enableKeyEvents: true,
    forceSelection: true,
    hideTrigger: true,
    matchFieldWidth: true,
    minChars: 1,
    queryDelay: 200,
    queryMode: 'remote',
    typeAhead: false,
    typeAheadDelay: 250,
    listeners: {
        keydown: function(field){
            if (Ext.isEmpty(field.getRawValue())) {
                field.reset();
            }
        }
    },

    initComponent: function(){
        this.store = POS.app.getStore('POS.store.combo.Product');

        this.listConfig = {
            itemTpl: new Ext.tpl.combo.Product
        };

        this.callParent(arguments);
    }
});