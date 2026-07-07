(function () {
  const copyButtons = document.querySelectorAll('[data-copy-email]');

  if (!copyButtons.length) {
    return;
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      return document.execCommand('copy');
    } catch (error) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () {
        return true;
      }).catch(function () {
        return fallbackCopyText(text);
      });
    }

    return Promise.resolve(fallbackCopyText(text));
  }

  copyButtons.forEach(function (button) {
    const defaultLabel = button.dataset.copyLabel || button.textContent;
    const defaultAriaLabel = button.getAttribute('aria-label') || 'Copy email address';
    const copiedLabel = button.dataset.copySuccessLabel || 'Copied!';
    const copiedAriaLabel = button.dataset.copySuccessAriaLabel || 'Email copied to clipboard';
    let resetTimer;

    function setCopiedState(isCopied) {
      window.clearTimeout(resetTimer);
      button.textContent = isCopied ? copiedLabel : defaultLabel;
      button.classList.toggle('is-copied', isCopied);
      button.setAttribute('aria-label', isCopied ? copiedAriaLabel : defaultAriaLabel);

      if (isCopied) {
        resetTimer = window.setTimeout(function () {
          setCopiedState(false);
        }, 1500);
      }
    }

    button.addEventListener('click', function () {
      copyText(button.dataset.copyEmail).then(function (wasCopied) {
        if (wasCopied) {
          setCopiedState(true);
        }
      });
    });
  });
})();
