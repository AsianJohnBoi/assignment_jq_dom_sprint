$(document).ready(function() {
  
  $('h1').html('jQuery Assignment!');

  $('.info-box')
    .css('text-align','center')
    .append($('<ol/>')
      .css('display', 'inline-block')
      .append('<li>The DOM</li>')
      .append('<li>The BOM</li>'));

  $('.sad').removeClass('sad').addClass('happy');

  $('#annoying-popup').css({'right': '0px', 'top': '30px'});

  $('li:nth-child(7)').html('Soaring scripts');

  $(":text").replaceWith('<textarea>');

});