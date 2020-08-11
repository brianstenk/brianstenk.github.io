"use strict";
window.onload = function () {
  const backgroundColor = '#EEEEEE';
  const redColor = '#FF8888';
  let wallsHit = false;
  let cheating = false;
  function setText() {
    $('#status').text('Click the "S" to begin.');
  }
  function turnRed() {
    $('.boundary').addClass('youlose');
    wallsHit = true;
  }
  function turnNormal() {
    cheating = true;
    wallsHit = false;
    $('#status').css('visibility', 'visible');
    $('#status').text('-----------------');
    $('.boundary').removeClass('youlose');
  }
  function won() {
    if (wallsHit) {
      $('#status').show();
      $('#status').text('Sorry, you lost. :[ ');
    } else {
      $('#status').show();
      $('#status').text('You win! :] ');
      $('.boundary').removeClass('youlose');
      cheating = false;
    }
  }
  function cheater() {
    if (cheating) {
      turnRed();
      won();
    }
  }
  $('#bounds,h2').mouseover(cheater);
  $('#end').click(won);
  $('#start').click(turnNormal);
  $('.boundary').mouseover(turnRed);
};
