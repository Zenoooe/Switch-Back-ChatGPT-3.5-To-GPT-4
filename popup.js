chrome.i18n.getAcceptLanguages((languages) => {
  const languageCode = languages[0] || 'en';
  chrome.i18n.getMessage('activateButton', (message) => {
    document.getElementById('activateButton').innerText = message;
  });
});
