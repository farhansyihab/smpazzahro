<template>
  <main id="main">
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-header" style="text-align: center;">
          <h2>Hubungi Kami</h2>
          <p>Silahkan menghubungi kami dengan form isian dibawah ini</p>
        </div>

        <div class="row gx-lg-0 gy-4">

          <div class="col-lg-4">

            <div class="info-container d-flex flex-column align-items-center justify-content-center">
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Alamat:</h4>
                  <p>Lrg. BBC No.99, 12 Ulu, Kec. Seberang Ulu II, Kota Palembang, Sumatera Selatan 30115</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>smkazzahropalembang@gmail.com</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Telp:</h4>
                  <p>+62 895-3887-26164</p>
                </div>
              </div><!-- End Info Item -->
            </div>

          </div>

          <div id="frmKontak" class="col-lg-8">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input v-model="formContact.name" type="text" name="name" class="form-control" id="name" placeholder="Nama Anda" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input v-model="formContact.email" type="email" class="form-control" name="email" id="email" placeholder="Alamat Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input v-model="formContact.subject" type="text" class="form-control" name="subject" id="subject" placeholder="Judul" required>
              </div>
              <div class="form-group mt-3">
                <textarea v-model="formContact.message" class="form-control" name="message" rows="7" placeholder="Ketik pesan Anda disini" required></textarea>
              </div>
              <div class="my-3">
                <!-- <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div> -->
              </div>
              <div class="text-center"><button class="btn btn-primary" >Kirim Pesan</button></div>
          </div><!-- End Contact Form -->

        </div>
        <div class="row gx-lg-0 gy-4" style="padding-top: 10px;">
          <div>
            <iframe 
                style="border:0; width: 100%; height: 270px;" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.0243010109957!2d104.77073531284651!3d-2.9894439717928383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b761968c2a229%3A0xbc68dabf2bcc9321!2sSMP%20AZZAHRO&#39;!5e0!3m2!1sen!2sid!4v1700825151842!5m2!1sen!2sid" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>          
        </div>


      </div>
    </section><!-- End Contact Section -->
  </main>
</template>
<script>
// import { getDatabase, ref, push } from 'firebase/database'
// const db = getDatabase()
export default { 
  name: 'Contact',
  data(){
    return{
      formContact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    // saveMessageToFirebase() {
    //   const data          = this.formContact ;
    //   const reffrmContact = ref(db, 'frmContact')
    //   push(reffrmContact,data);
    //   this.formContact.name = ''
    //   this.formContact.email = ''
    //   this.formContact.subject = ''
    //   this.formContact.message = ''
    // }
  }
}
</script>

<style scoped>
#frmKontak{
  padding-left: 20px;
  background: #fff;
  box-shadow: 0 2px 25px rgba(0,0,0,.1);
  padding: 20px;
  border-radius: 0 10px 10px 0;  
}
.contact .info-container {
  background-color: var(--color-primary);
  height: 100%;
  padding: 20px;
  border-radius: 10px 0 0 10px;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
}

.contact .info-item {
  width: 100%;
  background-color: #0d6efd;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
}

.contact .info-item:last-child {
  margin-bottom: 0;
}

.contact .info-item i {
  font-size: 20px;
  color: #fff;
  float: left;
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
}

.contact .info-item h4 {
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact .info-item p {
  padding: 0;
  margin-bottom: 0;
  font-size: 14px;
}

.contact .info-item:hover i {
  background: #fff;
  color: var(--color-primary);
}

.contact .php-email-form {
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 0 10px 10px 0;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #df1529;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #059652;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #059652;
  border-top-color: #fff;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
  padding: 12px 15px;
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--color-primary);
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type=submit] {
  background: var(--color-primary);
  border: 0;
  padding: 14px 45px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: rgba(0, 131, 116, 0.8);
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>