/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('amzExt.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    autoScroll: true,
    layout: {
        type: 'card'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    layout: {
                        type: 'absolute'
                    },
                    bodyPadding: 10,
                    title: 'Login',
                    titleAlign: 'center',
                    items: [
                        {
                            xtype: 'container',
                            padding: 50,
                            layout: {
                                type: 'absolute'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    x: 100,
                                    y: 70,
                                    cls: 'lblLogin lblLoginOrange',
                                    text: 'Sig in'
                                },
                                {
                                    xtype: 'container',
                                    x: 100,
                                    y: 100,
                                    items: [
                                        {
                                            xtype: 'label',
                                            cls: 'lblLogin lblLoginOrange',
                                            text: 'What is your e-mail address?'
                                        },
                                        {
                                            xtype: 'textfield',
                                            id: 'txtEmail',
                                            margin: '10 20',
                                            width: 400,
                                            fieldLabel: 'My e-mail address is:',
                                            labelWidth: 150,
                                            msgTarget: 'side',
                                            inputType: 'email',
                                            allowBlank: false,
                                            vtype: 'email'
                                        },
                                        {
                                            xtype: 'label',
                                            cls: 'lblLogin lblLoginOrange',
                                            text: 'Do you have an AmazonExt.com password?'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    x: 100,
                                    y: 180,
                                    layout: {
                                        type: 'absolute'
                                    },
                                    items: [
                                        {
                                            xtype: 'radiogroup',
                                            x: 10,
                                            y: 0,
                                            formBind: false,
                                            margin: 10,
                                            width: 400,
                                            layout: {
                                                align: 'stretch',
                                                type: 'vbox'
                                            },
                                            fieldLabel: 'Label',
                                            hideLabel: true,
                                            items: [
                                                {
                                                    xtype: 'radiofield',
                                                    cls: '',
                                                    id: 'rdoNo',
                                                    labelClsExtra: 'lblLogin',
                                                    name: 'radio',
                                                    boxLabel: 'No, I am a new customer.'
                                                },
                                                {
                                                    xtype: 'radiofield',
                                                    name: 'radio',
                                                    boxLabel: 'Yes, I have a password:',
                                                    checked: true
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            x: 175,
                                            y: 35,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    cls: 'inputPass',
                                                    id: 'txtPass',
                                                    fieldBodyCls: '',
                                                    fieldLabel: 'Label',
                                                    hideLabel: true,
                                                    msgTarget: 'side',
                                                    fieldStyle: '',
                                                    inputId: 'txtPassword',
                                                    inputType: 'password',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'label',
                                                    text: 'Forgot your password?'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    x: 100,
                                    y: 260,
                                    id: 'signIn',
                                    text: 'Sign in using our secure server'
                                }
                            ]
                        },
                        {
                            xtype: 'image',
                            x: 500,
                            y: 170,
                            height: 100,
                            width: 201,
                            src: 'http://localhost/amazonExt/resources/imgs/amazonext.png'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    cls: 'fondo',
                    layout: {
                        type: 'border'
                    },
                    header: false,
                    title: 'AmazonExt',
                    items: [
                        {
                            xtype: 'container',
                            region: 'north',
                            cls: 'fondo',
                            height: 100,
                            layout: {
                                type: 'absolute'
                            },
                            items: [
                                {
                                    xtype: 'image',
                                    width: 350,
                                    src: 'http://localhost/amazonExt/resources/imgs/amazonext.png'
                                },
                                {
                                    xtype: 'button',
                                    x: 850,
                                    y: 76,
                                    id: 'signOut',
                                    text: 'SignOut'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            region: 'west',
                            cls: 'fondo',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    padding: 10,
                                    width: 200,
                                    bodyBorder: false,
                                    animCollapse: false,
                                    collapseDirection: 'left',
                                    collapseFirst: false,
                                    collapsed: false,
                                    collapsible: true,
                                    iconCls: '',
                                    title: 'Shop by Departament',
                                    titleCollapse: true,
                                    showSeparator: false,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            iconCls: '',
                                            plain: true,
                                            text: 'MP3s & Cloud Player',
                                            menu: {
                                                xtype: 'menu',
                                                border: false,
                                                height: 300,
                                                minWidth: 400,
                                                padding: '',
                                                width: 400,
                                                bodyBorder: false,
                                                title: 'MP3s & Cloud player',
                                                plain: true,
                                                items: [
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'MP3 Store'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Best Sellers'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'New Releases'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Deals'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            iconCls: 'no-icon',
                                            plain: true,
                                            text: 'Amazon Cloud Drive',
                                            menu: {
                                                xtype: 'menu',
                                                height: 300,
                                                minWidth: 400,
                                                width: 400,
                                                title: 'Amazon Cloud Drive',
                                                items: [
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Your Cloud Drive'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Get the Desktop App'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Cloud Drive Photos for Android'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Cloud Drive Photos for iPhone'
                                                    },
                                                    {
                                                        xtype: 'menuitem',
                                                        padding: 5,
                                                        plain: true,
                                                        text: 'Learn more about Cloud Drive'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Kindle'
                                        },
                                        {
                                            xtype: 'menuseparator'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Books'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Movies, Music & Games'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Electronics & Computers'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Home, Garden & Tools'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Beauty, Health & Grocery'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Toys, Kids & Baby'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Clothing, Shoes & Jewelry'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Sports & Outdoors'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Automotive & Industrial'
                                        },
                                        {
                                            xtype: 'menuseparator'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            padding: 7,
                                            plain: true,
                                            text: 'Full Store Directory'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            region: 'center',
                            cls: 'fondo',
                            items: [
                                {
                                    xtype: 'container',
                                    padding: 10,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                align: 'stretch',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    autoRender: false,
                                                    id: 'cboCategory',
                                                    width: 240,
                                                    fieldLabel: 'Search',
                                                    labelWidth: 40,
                                                    emptyText: 'All',
                                                    displayField: 'name',
                                                    queryMode: 'local',
                                                    store: 'Category',
                                                    valueField: 'id'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    cls: 'search',
                                                    id: 'txtSearch',
                                                    fieldLabel: 'Label',
                                                    hideLabel: true
                                                },
                                                {
                                                    xtype: 'button',
                                                    cls: 'search',
                                                    id: 'btnGoSearch',
                                                    text: 'Go'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            cls: 'search-detail',
                                            autoScroll: true,
                                            items: [
                                                {
                                                    xtype: 'dataview',
                                                    id: 'productsView',
                                                    itemId: '',
                                                    overCls: 'overproducts',
                                                    autoScroll: true,
                                                    itemCls: 'products',
                                                    itemTpl: Ext.create('Ext.XTemplate', 
                                                        '<div id="idProduct">',
                                                        '    <div class="imgProd">',
                                                        '        <img src="{img}" />',
                                                        '    </div>',
                                                        '    <div class="descProd">',
                                                        '        <a href="javascript:;">{name}</a><br/>',
                                                        '        <span>{price}<img id=\'imgPrime\' style:"width:45px;heigth:17px;" src="{[this.resolveImage(values.prime)]}" /></span><br/>',
                                                        '        <span>{rate}</span><br/>',
                                                        '        <span>{stock}</span><br/>',
                                                        '    </div>',
                                                        '</div>',
                                                        {
                                                            resolveImage: function(prime) {
                                                                console.log('EntroFun');
                                                                if (prime == 1) {
                                                                    return 'metadata/resource/img/prime.jpg';
                                                                }
                                                                else {
                                                                    return '';
                                                                }
                                                            }
                                                        }
                                                    ),
                                                    overItemCls: 'overproducts',
                                                    store: 'Product'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            region: 'east',
                            cls: 'fondo',
                            items: [
                                {
                                    xtype: 'image',
                                    height: 500,
                                    padding: 10,
                                    src: 'http://localhost/amazonExt/resources/imgs/ad.png'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});