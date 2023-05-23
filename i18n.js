document.addEventListener('DOMContentLoaded', function() {
  chrome.i18n.getAcceptLanguages(function(languages) {
    const lang = languages[0];
    const elements = document.querySelectorAll('[data-i18n]');

    for (let element of elements) {
      const messageKey = element.dataset.i18n;
      const message = chrome.i18n.getMessage(messageKey);
      element.textContent = message;
    }
  });
});
