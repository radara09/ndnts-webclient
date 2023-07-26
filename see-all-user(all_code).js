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
  
  //$log.textContent += `content= ${String.fromCharCode(...dataContent)}\n`; //print data respon
    console.log(dataContent)
    console.log(`${rtt} ms`);
    
    const dataBaru = decoder.decode(dataContent);
    console.log(dataBaru);
    const jsonData = JSON.parse(dataBaru);
    console.log(jsonData);

    
    // Ambil elemen dengan ID dataContainer untuk menampilkan data
    const dataContainer = document.getElementById('dataContainer');

    // Loop melalui data JSON dan tampilkan di dalam div
    data.forEach(pasien => {
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


  // Fungsi untuk menampilkan data pasien
  function renderData(data) {
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = ""; // Reset konten sebelum menampilkan data baru
  
    // Tampilkan data pada halaman
    if (data.length > 0) {
      data.forEach((pasienData) => {
        const pasienHTML = `
          <div>
            <strong>Nomor Pasien:</strong> ${pasienData.nomor_pasien}<br>
            <strong>Nama:</strong> ${pasienData.nama}<br>
            <strong>Umur:</strong> ${pasienData.umur}<br>
          </div>
          <hr>
        `;
        dataContainer.innerHTML += pasienHTML;
      });
    } else {
      dataContainer.innerHTML = "<p>Tidak ada data pasien.</p>";
    }
  }
  
  // Panggil fungsi renderData() untuk menampilkan data saat halaman dimuat
  renderData(dataPasien);
  
  // Tambahkan event listener untuk tombol "See All" agar memanggil fungsi seeAllData() saat diklik
  const seeAllButton = document.getElementById("seeAllButton");
  seeAllButton.addEventListener("click", seeAllData);
  
  // Fungsi untuk menampilkan semua data saat tombol "See All" diklik
  function seeAllData() {
    // Di sini, Anda bisa mengambil data dari server melalui API atau sumber lainnya
    // dan kemudian memanggil fungsi renderData() dengan data yang diambil dari server
    // Contoh menggunakan data simulasi:
    renderData(dataPasien);
  }
  

*/

/*Tes Lagi

async function seeOne(evt) {
  evt.preventDefault();
  const prefix = new Name("/data/getuser");
  const app = document.querySelector("#app_name").value;

  const endpoint = new Endpoint();
  const encoder = new TextEncoder();
  const interest = new Interest();
  const decoder = new TextDecoder();

  interest.name = prefix;
  interest.mustBeFresh = true;
  interest.lifetime = 1000;
  interest.appParameters = encoder.encode(app);
  await interest.updateParamsDigest();

  const t0 = Date.now();
  const data = await endpoint.consume(interest);
  const rtt = Date.now() - t0;
  const dataContent = data.content;

  const dataBaru = decoder.decode(dataContent);
  console.log(dataBaru);
  const jsonData = JSON.parse(dataBaru);
  console.log(jsonData);

  // Memanggil fungsi untuk menampilkan data berdasarkan id yang diberikan
  const idToFind = 2; // Contoh id yang ingin dicari, sesuaikan dengan skenario Anda
  findAndDisplayData(jsonData, idToFind);
}

// Fungsi untuk mencari data berdasarkan id dan menampilkannya
function findAndDisplayData(jsonData, idToFind) {
  const dataFound = jsonData[idToFind];

  // Cek apakah data ditemukan atau tidak
  if (dataFound) {
    const dataContainer = document.getElementById("dataContainer");

    // Buat elemen-elemen HTML untuk menampilkan data
    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${dataFound.name}`;

    const ageElement = document.createElement("p");
    ageElement.textContent = `Age: ${dataFound.age}`;

    const idElement = document.createElement("p");
    idElement.textContent = `ID: ${dataFound.id}`;

    // Menambahkan elemen-elemen ke dalam div "dataContainer"
    dataContainer.appendChild(nameElement);
    dataContainer.appendChild(ageElement);
    dataContainer.appendChild(idElement);
  } else {
    console.log("Data not found!");
  }
}

async function main() {
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  face.addRoute(new Name("/"));
  // Enable the form after connection was successful.
  document.querySelector("#app_form").addEventListener("submit", seeOne);
}
window.addEventListener("load", main);

*/
