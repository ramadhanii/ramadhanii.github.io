window.onload = function() {
    Particles.init({
      selector: '.background',
      connectParticles: true,
      maxParticles: 80
    });
  }; 

  feather.replace()
  $('.toast').toast({delay: 2000})

  function copyToClipboard(text) {
        var input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);

        $('#copy-email').toast('show')
        return result;
  }