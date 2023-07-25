/*HTML*/
/*
<!DOCTYPE html>
<html>
<head>
  <title>Hasil Kesehatan Pasien</title>
  <link rel="stylesheet" href="seeOne.css">
</head>
<body>
  <header>
    <h1>Hasil Kesehatan Pasien</h1>
    <a href="index.html" class="button">Beranda</a>
  </header>
<form id="app_form">
   <fieldset>
    <h3>
        Masukkan Nama Pasien
      <input id="app_name" type="text">
    </h3>
    <input id="app_button" type="submit" value="Cek">
   </fieldset>
</form>
  <main>
    <h2>Informasi Pasien</h2>
    <label for="nama">Nama Pasien:</label>
    <p id="nama"></p>

    <label for="umur">Umur:</label>
    <p id="umur"></p>

    <label for="sex">Sex(F/M):</label>
    <p id="sex"></p>

    <h2>Data Kesehatan</h2>
    <label for="Diagnosis">Diagnosis:</label>
    <p id="Diagnosis"></p>

    <label for="DBP">Diastolic Blood Pressure(mmHg):</label>
    <p id="DBP"></p>

    <label for="SBP">Systolic Blood pressure(mmHg):</label>
    <p id="SBP"></p>

  </main>

  <footer>
    <p>&copy; 2023 Hasil Kesehatan Pasien. All rights reserved.</p>
  </footer>

  <script src="seeOne.js"></script>

</body>
</html>
*/

/*CSS*/
/*
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  header {
    background-color: #b2ddd4;
    color: #555;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: #b2ddd4;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }

  fieldset {
    margin-left: 20px;
    margin-top: 10px;
    margin-right: 70%;
  }

  input {
    margin-left: 10px;
  }

  main {
    padding: 20px;
  }

  h2 {
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  footer {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
  }
*/

/*JAVASCRIPT*/

/*
import { AltUri, Interest, Name } from "@ndn/packet";
import { WsTransport } from "@ndn/ws-transport";
import { Endpoint } from "@ndn/endpoint";

async function seeOne(evt) { //membuat fungsi async
 evt.preventDefault();
 const prefix = new Name("/data/getuser"); //membuat const baru dari id #app_prefix dari form
 const app = document.querySelector("#app_name").value; //membuat const baru dari id #app_param dari form
 //const $log = document.querySelector("#app_log"); //membuat const baru dari id #app_log dari form
 
 const endpoint = new Endpoint();
 const encoder = new TextEncoder(); //membuat const baru untuk fungsi TextEncoder
 const interest = new Interest();  //membuat const baru untuk fungsi Interest
 const decoder = new TextDecoder();
 
 interest.name = prefix; //membuat const baru untuk dari fungsi interest dan name
 interest.mustBeFresh = true; 
 interest.lifetime = 1000;
 interest.appParameters = encoder.encode(app); //melakukan encode dari string ke uint8array
 await interest.updateParamsDigest();
 
 //console.log(`ini dari ${app} dan ini dari ${interest.appParameters}`);
 //console.log(app)
 const t0 = Date.now();
 const data = await endpoint.consume(interest);
 const rtt = Date.now() - t0;
 const dataContent = data.content;
 
 //$log.textContent += `content= ${String.fromCharCode(...dataContent)}\n`; //print data respon
 console.log(dataContent) // => datacontent masih dalam bentuk uint8array ganti ke string
 console.log(`${rtt} ms`);
 //tugasnya gimana ganti itu ke string terus string ke json harusnya.
    
    const dataBaru = decoder.decode(dataContent);
    console.log(dataBaru);
    const jsonData = JSON.parse(dataBaru);
    console.log(jsonData);

    const name = jsonData.Nama;
    const age = jsonData.Umur;
    const jk = jsonData.Sex;
    const diagnosis = jsonData.Diagnosis
    const SBP = jsonData.SBP
    const DBP = jsonData.DBP
    
    console.log(name);
    console.log(age);
    console.log(jk);
    console.log(diagnosis);
    console.log(SBP);
    console.log(DBP);

    // Mengakses elemen-elemen HTML dengan menggunakan ID
    const dataNama = document.getElementById('nama');
    const dataUmur = document.getElementById('umur');
    const dataJK = document.getElementById('sex');
    const dataDiagnosis = document.getElementById('Diagnosis');
    const dataSBP = document.getElementById('SBP');
    const dataDBP = document.getElementById('DBP');

    dataNama.textContent = name;
    dataUmur.textContent = age;
    dataJK.textContent = sex;
    dataDiagnosis.textContent = diagnosis;
    dataSBP.textContent = SBP;
    dataDBP.textContent = DBP;

}

async function main() {
 const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
 face.addRoute(new Name("/"));
 // Enable the form after connection was successful.
 document.querySelector("#app_form").addEventListener("submit", seeOne);
}
window.addEventListener("load", main);

*/
