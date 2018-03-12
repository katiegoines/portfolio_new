$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault()

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500)
})

$('.nav-link').on('click', function() {
  $('.navbar-collapse').collapse('hide')
})

// for navbar placement

function size() {
  if (window.innerWidth < 992) {
    $('nav').removeClass('justify-content-end')
    $('.navbar-nav').addClass('nav-padding')
  } else {
    $('nav').addClass('justify-content-end')
    $('.navbar-nav').removeClass('nav-padding')
  }
}

size()
window.addEventListener('resize', size)


// Show hidden projects

$more = $('.more')

$more.on('click', function() {
  event.preventDefault()
  $destination = $(this).attr('href') 
  $($destination).removeClass('project-display')
})

// Hide projects

$back = $('.back')

$back.on('click', function() {
  event.preventDefault()
  $parent = $(this).parent().attr('id')
  setTimeout(function() {
    $('#' + $parent).addClass('project-display')

  }, 500)
})