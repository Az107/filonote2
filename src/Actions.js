const URL = "http://192.168.0.116:8080/notes";


async function getNotes() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;

}

function delNote(id) {
    fetch(URL, {method: "DELETE",headers:{'Content-Type': 'application/json'}, body: JSON.stringify({id: id})});
}

function addNote(note) {
  console.log(URL);
  fetch(URL, {method: "POST",headers:{'Content-Type': 'application/json'}, body: JSON.stringify(note)});
}


export {getNotes, delNote, addNote};