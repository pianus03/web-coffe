document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    alert('Terima kasih sudah mengirim pesan, ' + this.name.value + '!');
    this.reset();
  });
  