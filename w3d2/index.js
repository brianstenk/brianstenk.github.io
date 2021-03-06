
window.onload = function () {
  const numberOfCircles = $('#numberOfCircles');
  const growthRate = $('#growthRate');
  const growthAmount = $('#growthAmount');
  const originalWidth = $('#width');
  const start = $('#start');

  let timer;

  //remove the corcle / hide on click 
  const removeCircle = function () {
    $(this).remove();
  };

  const createCircles = function () {
    const safeColors = ['00', '33', '66', '99', 'cc', 'ff'];
    const rand = function () {
      return Math.floor(Math.random() * 6);
    };
    const randPostions = function () {
      return `${Math.floor(Math.random() * 75)}%`;
    };

    const randomColor = function () {
      const r = safeColors[rand()];
      const g = safeColors[rand()];
      const b = safeColors[rand()];
      return `#${r}${g}${b}`;
    };
     // Draw the Circles 
    for (let i = 1; i <= numberOfCircles.val(); i++) {
      $('#canvas').append(
        $('<div>', {
          class: 'circle',
          css: {
            width: originalWidth.val(),
            height: originalWidth.val(),
            'background-color': randomColor(),
            top: randPostions(),
            left: randPostions(),
            'z-index': 1,
          },
          mouseenter() {
            $(this).css('opacity', '50%');
          },
          mouseleave() {
            $(this).css('opacity', '100%');
          },
          click: removeCircle
        }),
      );
    }
  };
  const increaseSize = function () {
    $('.circle').each(function (idx, e) {
      let width = parseInt($(e).css('width'));
      let height = parseInt($(e).css('height'));
      width += parseInt(growthAmount.val());
      const newWidth = `${width}px`;
      height += parseInt(growthAmount.val());
      const newHeight = `${height}px`;
      $(e).css('width', newWidth).css('height', newHeight);
    });
  };
  const startEverything = function () {
    createCircles();
    timer = setInterval(increaseSize, parseInt(growthRate.val()));
  };

  start.click(startEverything);
};
