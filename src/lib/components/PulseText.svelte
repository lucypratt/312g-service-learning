
<script lang='ts'>
    export let text = ''
    
    const pulseAnimation = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `
  </script>
  <h2 class="pulseAnimation text-xl font-semibold mb-4">{text}</h2>
  
  <style>


@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
    h2 {
      animation: pulse 3s infinite alternate;
    }
  
  
  </style>
  

  