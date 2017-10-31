  // 手機版選單
var MobileMenu = $('.nav_menu'),
    MobileNavToggleBtn = $('.nav-icon-btn');

MobileNavToggleBtn.on('click', function(){
  MobileMenu.toggleClass('toggle_open');
  MobileNavToggleBtn.toggleClass('toggle_open');
})



MobileMenu.find('li').on('click', function(){
  if(MobileMenu.hasClass('toggle_open')){
    MobileMenu.removeClass('toggle_open');
    MobileNavToggleBtn.removeClass('toggle_open');
  }
})




// modal

// var closeModalBtn = $('.closeModal-btn'),
// 	galleryModal = $('.gallery_modal')

// closeModalBtn.on('click', function(){
// 	if(galleryModa.hasClass('modal_show')){
// 		galleryModal.removeClass('modal_show');
// })
