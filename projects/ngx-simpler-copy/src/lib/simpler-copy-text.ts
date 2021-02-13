/**
 * used for copy text to clipboard
 */
export const simplerCopyText = (value: any) => {
  const createCopy = (e: ClipboardEvent) => {
    e.clipboardData.setData('text/plain', value);
    e.preventDefault();
  };

  document.addEventListener('copy', createCopy);
  document.execCommand('copy');
  document.removeEventListener('copy', createCopy);
};
