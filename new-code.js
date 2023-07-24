import { AltUri, Interest, Name } from "@ndn/packet";
import { WsTransport } from "@ndn/ws-transport";
import { Endpoint } from "@ndn/endpoint";

// JavaScript code
// const recordForm = document.getElementById("recordForm");
// recordForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//   // Mengambil nilai-nilai dari elemen input
//   const noPasien = document.getElementById("noPasien").value;
//   const nama = document.getElementById("nama").value;
//   const umur = document.getElementById("umur").value;
//   const sex = document.getElementById("sex").value;
//   const bmi = document.getElementById("bmi").value;
//   const heartRate = document.getElementById("heartRate").value;
//   const height = document.getElementById("height").value;
//   const weight = document.getElementById("weight").value;
//   const file = document.getElementById("file").files[0];

//   // Buat objek data yang akan dikirim ke Firebase
//   const newRecord = {
//     noPasien: noPasien,
//     nama: nama,
//     umur: umur,
//     sex: sex,
//     bmi: bmi,
//     heartRate: heartRate,
//     height: height,
//     weight: weight,
//     file: file.name
//     };

//     const jsonData = JSON.stringify(newRecord);
//     submit(jsonData)
   
// })

async function submit(evt) { //membuat fungsi async
  evt.preventDefault();
    // Mengambil nilai-nilai dari elemen input
  const noPasien = document.getElementById("noPasien").value;
  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const sex = document.getElementById("sex").value;
  const bmi = document.getElementById("bmi").value;
  const heartRate = document.getElementById("heartRate").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const file = document.getElementById("file").files[0];

  // Buat objek data yang akan dikirim ke Firebase
  const newRecord = {
    noPasien: noPasien,
    nama: nama,
    umur: umur,
    sex: sex,
    bmi: bmi,
    heartRate: heartRate,
    height: height,
    weight: weight,
    file: file.name
    };

    const jsonData = JSON.stringify(newRecord);
     const prefix = "/data/adduser"; //membuat const baru dari id #app_prefix dari form
     const app = jsonData; //membuat const baru dari id #app_param dari form
     //const $log = document.querySelector("#app_log"); //membuat const baru dari id #app_log dari form
     
     const endpoint = new Endpoint();
     const encoder = new TextEncoder(); //membuat const baru untuk fungsi TextEncoder
     const interest = new Interest();  //membuat const baru untuk fungsi Interest
     
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
     
     $log.textContent += `content= ${String.fromCharCode(...dataContent)}\n`; //print data respon
     console.log(interest.appParameters)
     console.log(`${rtt} ms`);
   }

async function main() {
     const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
     face.addRoute(new Name("/"));
   
     // Enable the form after connection was successful.
     document.querySelector("#recordForm").addEventListener("submit", submit);
   }

window.addEventListener("load", main);
