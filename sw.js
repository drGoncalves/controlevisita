<link rel="manifest" href="manifest.json">
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registrado com sucesso:', registration.scope);
      }, function(err) {
        console.log('ServiceWorker falhou:', err);
      });
    });
  }
</script>
