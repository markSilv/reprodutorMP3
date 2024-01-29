document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const currentTimeSpan = document.getElementById('currentTime');
    const saveButton = document.getElementById('saveButton');

    // Recuperar o tempo salvo, se existir
    const savedTime = localStorage.getItem('savedTime');
    if (savedTime) {
      audioPlayer.currentTime = parseFloat(savedTime);
      updateCurrentTime();
    }

    // Atualizar o tempo de reprodução exibido
    function updateCurrentTime() {
      const minutes = Math.floor(audioPlayer.currentTime / 60);
      const seconds = Math.floor(audioPlayer.currentTime % 60);
      const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      currentTimeSpan.textContent = formattedTime;
    }

    // Atualizar o tempo de reprodução durante a reprodução
    audioPlayer.addEventListener('timeupdate', updateCurrentTime);

    // Salvar o tempo de reprodução atual
    saveButton.addEventListener('click', function() {
      localStorage.setItem('savedTime', audioPlayer.currentTime.toString());
      alert('Tempo salvo com sucesso!');
    });

    // Adicionar um evento para quando o áudio for carregado
    audioPlayer.addEventListener('loadedmetadata', function() {
      // Exemplo: definir o tempo inicial para 30 segundos
      audioPlayer.currentTime = 30;
      updateCurrentTime();
    });

    // Adicione suas músicas aqui
    const musicSource = 'caminho/do/seu/arquivo.mp3';
    audioPlayer.src = musicSource;
  });