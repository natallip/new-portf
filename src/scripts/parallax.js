window.addEventListener('load', function () {
  const parallax = document.querySelector('.parallax');
  const layers = parallax.children;

  function moveLayersDependsOnScroll(wScroll) {
      [...layers].forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 50;

        layer.style.transform = `translateY(-${strafe}%)`;
      });
  }

  window.addEventListener('scroll', event => {
      const vScroll = window.pageYOffset;
      moveLayersDependsOnScroll(vScroll);
  });
});



// const moveLayers = function (e) {
// 	let parallaxContainer = document.getElementById('parallax'),
// 			layers = parallaxContainer.children;

// 	let initialX = (window.innerWidth / 2) - e.pageX,
// 			initialY = (window.innerHeight / 2) - e.pageY;

// 	[].slice.call(layers).forEach(function (layer, i) {
// 		let divider = i/100,
// 				positionX = initialX * divider,
// 				positionY = initialY * divider,
// 				bottomPosition = (window.innerHeight / 2) * divider,
// 				layerStyle = layer.style,
// 				transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';

// 		layerStyle.transform = transformString;
// 		layerStyle.bottom = '-' + bottomPosition + 'px';
// 	});
// }

//window.addEventListener('mousemove', moveLayers);


//(function() {
  //-----------------------------------------------------------------
  // window.addEventListener('scroll', function(event) {
  //   let depth, layer, layers, movement, topDistance, translate3d, i, len;
  //   topDistance = this.pageYOffset;
	// 	layers = document.querySelectorAll('.parallax__layer');
	// 	//this.console.log(layers, layers.length);
  //   for (i = 0, len = layers.length; i < len; i++) {
  //     layer = layers[i];
  //     depth = layer.getAttribute('data-speed');
  //     movement = -(topDistance * depth);
  //     translate3d = 'translate3d(0, ' + movement + 'px, 0)';
  //     // layer.style['-webkit-transform'] = translate3d;
  //     // layer.style['-moz-transform'] = translate3d;
  //     // layer.style['-ms-transform'] = translate3d;
  //     // layer.style['-o-transform'] = translate3d;
  //     layer.style.transform = translate3d;
  //   }
  // });
  //-----------------------------------------------------------------------
//}).call(this);