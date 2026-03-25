// ASYNC task

const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
console.log(obj);

// output will be promise pending because ye ek asynchronous task hai toh ye toda time lgaiga execute hone me but aapne isko phli boldiya ki print kro 

// toh agar ye kuch time lera hai execute hone me toh kya me esa bol skta hu li ek baar time deke dekhte hai hai isko
// therefore using, setTimeOut
// const obj2=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
// setTimeout(()=>{
// console.log(obj2);
// }, 2000)

// output aagya , but problem hai ek :
// how do I  get to know ki kitne second ya kitna time wait krna hai or tb execution hojaiga ? 
//  so hum use krte hai: .then ka :  ye .then tabhi chlega jb promise me value aachuki hogi

// const promise=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
// promise.then((data)=>{ // data:  ke andr sara kuch aajaiga as a callback dere hai hum (data)
//     console.log(data) // data print
// })


// yhi promise hai: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// now theres a chance of having a error like if lets say:
// subscription lena ho or hum free me use krre ho tb error bole ki buy kro
// free trial over hogye thn
// etc kuch bhi hoskta hai so humme isko handle bhi krna aanachaiye therefore we use : .catch()


// const promise2=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
// promise2.then((data)=>{ // data:  ke andr sara kuch aajaiga as a callback dere hai hum (data)
//     console.log(data) // data print
// }).catch((error)=>{
//     console.log(error)
// })


// Promises have 3 states :
// (1) pending : Jese 1st example me dekha ki print hor ahai pending , Promise { <pending> }, beacuse abhi execute nhii hua h
// (2) resolve : mtlb ki mne request maari or muje laake dedi , .then()
// (3) reject  : mtlb mne request maari or error lake diya ya fir reject hogyi req , .catch()


// ============================================================================================================
// ============================================================================================================

// like till now im only getting this as output what if i want "Response Body" from weatherapi.com as output? 
// iske liye hum json() use krenge

// const promise3=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
// promise3.then((data)=>{ // data:  ke andr sara kuch aajaiga as a callback dere hai hum (data)
//     console.log(data.json()) // data print
// })

// output : Promise { <pending> }

//  so this meanss ye operation bhi async hai jo time lega so isko kese handle kree? using: .then()
// therefore:

// const promise4=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
// promise4.then((data)=>{ // data:  ke andr sara kuch aajaiga as a callback dere hai hum (data)
//     const prom = data.json() // data.json()=Response Body dega
//     prom.then((info)=>{
//         console.log(info)
//     })
// })

// output: Response Body ayega like proper information location : london vegera jha ka manga hai


// ======================================================
// same thing "Response Body" vala kaam hum Return statement ko use krke bhi kr skte hai use
// const promise5=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);
// const prom1 =promise5.then((data)=>{ 

//     return data.json() // iski value seedha return hoke prom1 me jaigi
   
// })
// prom1.then((info)=>{
//         console.log(info)
//     })


// isi same ko Easy way me likhne ka tarika : promise chaining (mtlb jesi response return hua seedha usme  niche .then() lgadiya)
// const promise6=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);

//  promise6.then((data)=>{ // kyu ki ye prom2 me hi save krna tha or uspe phi lgana tha .then() toh prom2 as const htadiya

//     return data.json() // iski value seedha return hoke prom1 me jaigi
   
// }).then((info)=>{
//         console.log(info)
//     }) // jb muje isko prom2 pe hi lgana h toh fir niche kyu likhna

// ===============================================================================================
// most easiest  way:-

// const promise7=fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`);

//  promise7.
//  then(data=> data.json()) // kyu ki ye arrow function h toh single argument k liye bracket htado, and return likhne ki need nhi vo khud return hojaiga
//  .then(info=> console.log(info)) // kyu ki ye arrow function h toh single argument k liye bracket htado, and return likhne ki need nhi vo khud return hojaiga

//  ===============================================================================================
//  ===============================================================================================
//  expalining this smallest variation:
// (1)
//  promise7 // jo bhii promise ne diya vo 
//  .then(data=> data.json())  // idhr data me gya jisko baadme .json() lagaya hai, or jb ye promise dera hai tb vo 
//  .then(info=> console.log(info)) // info me gya , jisko fir print krvaya hai
//  .catch(error=> console.log(error))
 
 
// ================================================================================================
//                                             OR 
// ================================================================================================
// (2)
fetch(`http://api.weatherapi.com/v1/current.json?key=843298eb1f134508b8c82931252307&q=London&aqi=yes`) // YHI toh promise7 hai
.then(data=> data.json())  // idhr data me gya jisko baadme .json() lagaya hai, or jb ye promise dera hai tb vo 
.then(info=> console.log(info.current.temp_c)) // info me gya , jisko fir print krvaya hai
.catch(error=> console.log(error))
//  ===========================================================================================================