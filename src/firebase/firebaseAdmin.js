import { initializeApp } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAil_S0lB08dZ9t8BH0B_FC1p808n13a8M",
    authDomain: "smk-azzahro.firebaseapp.com",
    projectId: "smk-azzahro",
    databaseURL: "https://smk-azzahro-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "smk-azzahro.appspot.com",
    messagingSenderId: "358933282674",
    appId: "1:358933282674:web:77b8e87debcca7bd7267eb"
  };

const app       = initializeApp(firebaseConfig);
const admin     = app.admin();
const auth      = getAuth(app);

export class adminFirebase {
    #emailAdress = "";
    constructor(gmailAdress){
        this.#emailAdress = gmailAdress;
    }

    setUser() {
        //this.#user = await auth.getUserByEmail(this.#emailAdress);
        return new Promise((resolve, reject) => {
            const user = auth.getUserByEmail(this.#emailAdress)
            if(user){
                resolve(user);
            }else{
                reject("ada error");
            }
        })
    }

    claimAdmin(){
        this.setUser().then((result) => {
            admin.auth().setCustomClaims(result.uid, { role: "admin" });
        })
    }
}
