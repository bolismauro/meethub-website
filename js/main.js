(function ($, window, document, undefined) {
// TEAM
    var gridContainer = $('#grid-container,#grid-container2')
// init cubeportfolio
    gridContainer.cubeportfolio({
		animationType: 'sequentially',
		gapHorizontal: 0,
		gapVertical:10,
		gridAdjustment: 'responsive',
		caption: 'zoom',
		displayType: 'sequentially ',
		displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: false,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: false,
	});
})(jQuery, window, document);





