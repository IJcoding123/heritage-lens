function saveEdits() {
  const content = document.documentElement.outerHTML;
  const blob = new Blob([content], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = location.pathname.split('/').pop();
  a.click();
}
