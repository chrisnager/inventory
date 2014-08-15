(function () {
    var app = angular.module('inventory', []);

    // InventoryFactory
    app.factory('InventoryFactory', function() {
        var itemsArray = [
            { name: 'Kale chips' },
            { name: 'Cheese' },
            { name: 'Coconut water' },
            { name: 'Cat' }
        ];

        var Items = function() {
            return itemsArray;
        }

        Items.add = function( value ) {
            itemsArray.push({
                name: value
            });
        }

        Items.remove = function( value ) {
            itemsArray.splice(value, 1);
        }

        return {
            req : Items,
            add : Items.add,
            remove : Items.remove
        }
    });

    // InventoryController
    app.controller('InventoryController', function( InventoryFactory ) {
        this.items = InventoryFactory.req();

        this.add = function( newItem ) {
            if ( !(newItem === '') && !(newItem === undefined) ) {
                InventoryFactory.add( newItem );
            } else {
                return;
            }
        }

        this.remove = function( index ) {
            InventoryFactory.remove( index );
        }
    });

    // Instantiate FastClick
    window.addEventListener( 'load', function() {
        FastClick.attach( document.body );
    }, false);
})();
