let insert = document.querySelector('#insert');

window.addEventListener('keypress', (e)=>{
    insert.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space' : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
`})