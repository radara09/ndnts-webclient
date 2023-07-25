import { AltUri, Interest, Name } from "@ndn/packet";
import { WsTransport } from "@ndn/ws-transport";
import { Endpoint } from "@ndn/endpoint";

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
     const prefix = new Name("/data/adduser"); //membuat const baru dari id #app_prefix dari form
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

/*
Bismillah Bismillah
async function uploadFileAndGetDownloadURL(file) {
    try {
      // Buat referensi ke Firebase Storage dengan spesifik mengakses direktori "files" dan nama file
      const storageRef = firebase.storage().ref().child("files/" + file.name);
      const uploadTask = storageRef.put(file);
  
      // Tunggu hingga proses upload selesai
      await uploadTask;
  
      // Dapatkan URL unduhan file
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
      // Kembalikan URL unduhan
      return downloadURL;
    } catch (error) {
      // Tangani kesalahan yang terjadi selama proses upload atau saat mendapatkan URL unduhan
      console.error("Error uploading file or getting download URL:", error);
      throw error;
    }
  }
*/


/*
//Bismillah Yah

function uploadFileAndGetDownloadURL(file) {
    return new Promise((resolve, reject) => {
        // Buat referensi ke Firebase Storage dengan spesifik mengakses direktori "files" dan nama file
    const storageRef = firebase.storage().ref().child("files/" + file.name);
    // Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (error) => {
            // Handle errors during upload
            console.error("Error uploading file to Firebase Storage: ", error);
            reject(error);
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL)
                console.log('File available at', downloadURL);
            });
        },  // Ignore progress events since we don't need them in this case
    );
    })
    
}
*/


/*
// Upload file and metadata to the object 'images/mountains.jpg'
const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed', 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
*/


/*
import { AltUri, Interest, Name } from "@ndn/packet";
import { WsTransport } from "@ndn/ws-transport";
import { Endpoint } from "@ndn/endpoint";

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

  function uploadFileAndGetDownloadURL(file) {
    // Buat referensi ke Firebase Storage dengan spesifik mengakses direktori "files" dan nama file
    const storageRef = firebase.storage().ref().child("files/" + file.name);
  
    // Lakukan proses unggah file ke Firebase Storage
    const uploadTask = storageRef.put(file);
  
    // Kembalikan promise yang mengandung URL unduhan dari file yang diunggah
    return new Promise((resolve, reject) => {
      // Listen for state changes, errors, and completion of the upload
      uploadTask.on(() => {
          // Upload completed successfully, get the download URL of the file
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              // Handle error saat mendapatkan URL unduhan
              console.error("Error getting download URL: ", error);
              reject(error);
            });
        }
      );
    });
  }

  if (file) {
    uploadFileAndGetDownloadURL(file)
      .then((downloadURL) => {
        // Lakukan apa pun yang Anda inginkan dengan URL unduhan
        console.log("URL unduhan file:", downloadURL);
  
        // Gunakan URL unduhan yang diterima dalam sebuah const
        const downloadURLConst = downloadURL;
        console.log("URL unduhan disimpan dalam const:", downloadURLConst);
      })
      .catch((error) => {
        // Tangani error jika ada
        console.error("Error saat mengunggah file:", error);
      });
  } else {
    // File belum dipilih, tampilkan pesan kesalahan jika diperlukan
    alert("Pilih file untuk diunggah.");
  }
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
      file: downloadURLConst
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


*/
