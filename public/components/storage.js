
const fileButton = document.getElementById("fileButton");

fileButton.addEventListener('change', function(e){

  var storage = firebase.storage();
  var file = e.target.files[0];
  var metadata = {
    'contentType': file.type
  };
  const storageRef = storage.ref('images/'+ file.name);
  var task = storageRef.put(file, metadata);

  task.on('state_changed',

  function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred /
    snapshot.totalBytes)*100;
    uploader.value = percentage;
  },
  function error(err){

  },
  function complete(){
    var gsRef = storage.refFromURL('gs://web-app-7f508.appspot.com/images/'+file.name);
    const rowRef = document.getElementById("row");
    const imgCreate = document.createElement("img");
    const columnCreate = document.createElement('div');
    const progressCreate = document.createElement("progress");
    
    columnCreate.className = "column";
    rowRef.appendChild(columnCreate);
    rowRef.className = "row";
    imgCreate.id = "catalogImg";
    columnCreate.appendChild(imgCreate);
    columnCreate.appendChild(progressCreate);
    progressCreate.value="0";
    progressCreate.max="100";
    progressCreate.id="uploader";
    progressCreate.innerHTML="0%"
    //imgCreate.src = gsRef;
  });
});

