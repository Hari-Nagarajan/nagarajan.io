<template>
    <footer id="newsletter-footer">
        <p>
            If you've enjoyed reading my ramblings, you can subscribe to get them emailed to you.
        </p>
      <iframe 
        src="https://embeds.beehiiv.com/b24fcdf3-eb5a-4cad-9f2b-4e08ad1b85fc?slim=true"
        data-test-id="beehiiv-embed"
        width="100%"
        frameborder="0"
        scrolling="no"
        style="border-radius: 4px; border: none; margin: 0; background-color: transparent;">
      </iframe>
      <p id="copyright-footer">© Hari Nagarajan 2024 </p>
    </footer>
  </template>
  
  <style scoped>

  #newsletter-footer {
  color: ghostwhite;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center; /* Centers the child horizontally */
  align-items: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

@media (max-width: 440px) {
  #newsletter-footer {
    width: 95%;
  }

  #copyright-footer {
    width: 90%;
    text-align: center;
  }
}
  </style>
  