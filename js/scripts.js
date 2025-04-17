
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
function openModal(project) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  if (project === 'vapt') {
    body.innerHTML = '<h2>VAPT</h2><p>Simulated a full VAPT cycle including scanning, enumeration, Nessus scanning, and exploitation using Metasploit.</p><a href="https://github.com/imakshathagowda/Vulnerability-Assessment-and-Penetration-Testing-VAPT">View GitHub</a>';
  } else if (project === 'webgoat') {
    body.innerHTML = '<h2>WebGoat SQLi</h2><p>Performed SQL injection attacks on WebGoat labs with query-level analysis and documentation.</p><a href="https://github.com/imakshathagowda/WebGoat-SQL-Injection-Assessment">View GitHub</a>';
  }
  modal.style.display = 'block';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
