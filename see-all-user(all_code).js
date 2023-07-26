/*HTML*/

/*
<!DOCTYPE html>
<html>
<head>
  <title>Daftar Pasien</title>
  <link rel="stylesheet" href="seeAll.css">
</head>
<body>
    <header>
        <h1>Cek Riwayat Pasien</h1>
        <button id="keluarButton">Keluar</button>
      </header>
      <nav>
        <ul>
          <li><a href="index.html">Beranda</a></li>
          <li><a href="addrecord.html">Add Record</a></li>
        </ul>
      </nav>
  <h1>Daftar Pasien</h1>
  <div id="dataContainer">
    <!-- Tempat menampilkan data pasien -->
  </div>
  <button id="seeAllButton" onclick="seeAllData()">See All</button>
  <footer>
    <p>&copy; 2023 Cek Riwayat Pasien. All rights reserved.</p>
  </footer>

  <script src="seeAll.js"> </script>
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

    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      background-color: #f4f4f4;
    }

    nav ul li {
      flex: 1;
      text-align: center;
      padding: 10px;
    }

    nav ul li a {
      text-decoration: none;
      color: #555;
      font-weight: bold;
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

    select {
      width: 100%;
      padding: 10px;
      border: 1px solid #cccccce3;
      border-radius: 4px;
      box-sizing: border-box;
      margin-bottom: 10px;
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

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }

    th {
      background-color: #f4f4f4;
    }

    footer {
      background-color: #f4f4f4;
      padding: 20px;
      text-align: center;
    }

*/

/*JAVASCRIPT*/
/*
//belum fix

import { Interest, Name } from "@ndn/packet";
import{ WsTransport } from "@ndn/ws-transport";
import { Endpoint } from "@ndn/endpoint";

async function seeAll(evt) { //membuat fungsi async
  evt.preventDefault();
  const prefix = new Name("/data/alluser"); //membuat const baru dari id #app_prefix dari form
  const app = document.querySelector("#app_param"); //membuat const baru dari id #app_param dari form
  //const $log = document.querySelector("#app_log"); //membuat const baru dari id #app_log dari form
  
  const endpoint = new Endpoint();
  const encoder = new TextEncoder(); //membuat const baru untuk fungsi TextEncoder
  const interest = new Interest();  //membuat const baru untuk fungsi Interest
  const decoder = new TextDecoder();
  
  interest.name = prefix; //membuat const baru untuk dari fungsi interest dan name
  interest.mustBeFresh = true; 
  interest.lifetime = 1000;
  interest.appParameters = encoder.encode(app); //melakukan encode packet ndn
  await interest.updateParamsDigest();
  
  //console.log(`ini dari ${app} dan ini dari ${interest.appParameters}`);
  //console.log(app)
  const t0 = Date.now();
  const data = await endpoint.consume(interest);
  const rtt = Date.now() - t0;

const dataContent = data.content;
console.log(dataContent)
console.log(`${rtt} ms`);

const dataBaru = decoder.decode(dataContent);
console.log(dataBaru);
const jsonData = JSON.parse(dataBaru);
console.log(jsonData);


// Ambil elemen dengan ID dataContainer untuk menampilkan data
const dataContainer = document.getElementById('dataContainer');

// Loop melalui data JSON dan tampilkan di dalam div
Object.entries(jsonData).forEach([, pasien] => {
// Buat elemen untuk menampilkan data pasien
const pasienElement = document.createElement('div');
pasienElement.className = 'pasien';

// Tampilkan data pasien di dalam elemen yang telah dibuat
pasienElement.innerHTML = `
    <h2>Nama: ${pasien.Nama}</h2>
    <p>Umur: ${pasien.Umur}</p>
    <p>Jenis Kelamin: ${pasien.Sex}</p>
    <p>No.Pasien: ${pasien.Diagnosis}</p>
    <p>: ${pasien.Sex}</p>
    
`;

// Tambahkan elemen pasien ke dalam kontainer
dataContainer.appendChild(pasienElement);
});

}

async function main() {
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  face.addRoute(new Name("/"));
  // Enable the form after connection was successful.
  document.querySelector("#seeAllButton").addEventListener("click", seeAll);
}
window.addEventListener("load", main);

*/


/*BISMILLAH
import { Interest, Name } from "@ndn/packet";
import{ WsTransport } from "@ndn/ws-transport";
import { Endpoint } from "@ndn/endpoint";

async function seeAll(evt) { //membuat fungsi async
  evt.preventDefault();
  const prefix = new Name("/data/alluser"); //membuat const baru dari id #app_prefix dari form
  const app = document.querySelector("#app_param"); //membuat const baru dari id #app_param dari form
  //const $log = document.querySelector("#app_log"); //membuat const baru dari id #app_log dari form
  
  const endpoint = new Endpoint();
  const encoder = new TextEncoder(); //membuat const baru untuk fungsi TextEncoder
  const interest = new Interest();  //membuat const baru untuk fungsi Interest
  const decoder = new TextDecoder();
  
  interest.name = prefix; //membuat const baru untuk dari fungsi interest dan name
  interest.mustBeFresh = true; 
  interest.lifetime = 1000;
  interest.appParameters = encoder.encode(app); //melakukan encode packet ndn
  await interest.updateParamsDigest();
  
  //console.log(`ini dari ${app} dan ini dari ${interest.appParameters}`);
  //console.log(app)
  const t0 = Date.now();
  const data = await endpoint.consume(interest);
  const rtt = Date.now() - t0;

const dataContent = data.content;
console.log(dataContent)
console.log(`${rtt} ms`);

const dataBaru = decoder.decode(dataContent);
console.log(dataBaru);
const jsonData = JSON.parse(dataBaru);
console.log(jsonData);


// Ambil elemen dengan ID dataContainer untuk menampilkan data
const dataContainer = document.getElementById('dataContainer');

// Loop melalui data JSON dan tampilkan di dalam div
Object.entries(jsonData).forEach(([, pasien]) => {
// Buat elemen untuk menampilkan data pasien
const pasienElement = document.createElement('div');
pasienElement.className = 'pasien';

// Tampilkan data pasien di dalam elemen yang telah dibuat
pasienElement.innerHTML = `
    <h2>Nama: ${pasien.Nama}</h2>
    <p>Umur: ${pasien.Umur}</p>
    <p>Jenis Kelamin: ${pasien.Sex}</p>
    <p>No.Pasien: ${pasien.Diagnosis}</p>
    <p>: ${pasien.Sex}</p>
`;

// Tambahkan elemen pasien ke dalam kontainer
dataContainer.appendChild(pasienElement);
});

}

async function main() {
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  face.addRoute(new Name("/"));
  // Enable the form after connection was successful.
  document.querySelector("#seeAllButton").addEventListener("click", seeAll);
}
window.addEventListener("load", main);

<!DOCTYPE html>
<html>
<head>
  <title>Daftar Pasien</title>
  <link rel="stylesheet" href="seeAll.css">
</head>
<body>
    <header>
        <h1>Cek Riwayat Pasien</h1>
        <button id="keluarButton">Keluar</button>
      </header>
      <nav>
        <ul>
          <li><a href="index.html">Beranda</a></li>
          <li><a href="addrecord.html">Add Record</a></li>
        </ul>
      </nav>
  <h1>Daftar Pasien</h1>
  <table>
    <thead>
      <tr>
        <th>No Pasien</th>
        <th>Nama</th>
        <th>Umur</th>
      </tr>
    </thead>
    <tbody id="list-data"></tbody>
  </table>
  <button id="seeAllButton" onclick="seeAll()">See All</button>
  <footer>
    <p>&copy; 2023 Cek Riwayat Pasien. All rights reserved.</p>
  </footer>

  <script src="seeAll.js"> </script>
</body>
</html>

*/
