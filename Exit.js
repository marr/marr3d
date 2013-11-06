THREE.ExitEffect = function( renderer, charSet, options ) {

    charSet = ( charSet === undefined ) ? '.|_' : charSet;

    if ( !options ) options = {};
    
    var iScale = !options['scale'] ? 1 : options['scale'];
    
    this.render = function ( scene, camera ) {

		renderer.render( scene, camera );
		doExit( renderer, iScale );

	};

	this.domElement = domElement;

    function doExit( canvasRenderer, iScale ) {

    }

};
