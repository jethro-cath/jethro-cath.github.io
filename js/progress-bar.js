function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle) {
  
      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);
  
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
  
      return d;       
  }

  function createArc(block) {
    let path = block.querySelector('.hw-progress-card__bar svg path');
    let svg = block.querySelector('.hw-progress-card__bar svg');
    let valueBlock = block.querySelector('.circle-bar');
    let length = Math.min(svg.clientHeight, svg.clientWidth) / 2;
    let percents = parseFloat(block.dataset.percents);
    if(percents > 100) {
      percents = 100;
    } else if(percents < 0) {
      percents = 0;
    }
    let angle = parseFloat(percents) / 100 * 360;
    let x = length;
    let y = length - 0.25;
    let radius = length - 2.5;
    valueBlock.innerText = percents + "%";
    path.setAttribute("d", describeArc(x, y, radius, 0, angle));
    if(percents >= 50){
    block.classList.add('hw-progress-card_good');
    }
    //ToDo: implement 100%
  }

  function toggleSidebar(button){
    let sidebar = button.dataset.sidebar;
    document.querySelector(sidebar).classList.toggle('show');
  }
  
  window.onload = function() {
    document.querySelectorAll('.hw-progress-card').forEach(createArc);
    document.querySelectorAll('.top-bar__burger-menu').forEach(function(el){
      el.addEventListener('click', function(e){
        e.preventDefault();
        toggleSidebar(el);
      });
    });
  };
  