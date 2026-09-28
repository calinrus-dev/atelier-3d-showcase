import {commands,defaultBindings,keyChord,bindingError} from '../samples/shortcuts.js';
const q=id=>document.getElementById(id);
for(const [id,label,group,chord] of commands){const option=document.createElement('option');option.value=id;option.textContent=label;q('command').append(option);const row=document.createElement('p');row.textContent=group+' / '+label+' → '+chord;q('map').append(row);}
function check(){q('result').textContent=bindingError(q('command').value,q('chord').value,defaultBindings)||'Válida. No entra en conflicto con el mapa actual.';}
q('check').addEventListener('click',check);q('command').addEventListener('change',check);
q('capture').addEventListener('keydown',e=>{if(e.key==='Tab')return;e.preventDefault();q('event').textContent=JSON.stringify({key:e.key,code:e.code,normalized:keyChord(e)},null,2);});check();
