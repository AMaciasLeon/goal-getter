<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar color="black">
          <ion-title class="ion-text-center title-style">Registro</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding">
        <form @submit.prevent="register" class="ion-padding">
          <ion-item>
            <ion-label position="floating" class="label-style">Nombre de usuario</ion-label>
            <ion-input type="text" required v-model="user" class="input-style"/>
          </ion-item>
          <ion-item>
            <ion-label position="floating" class="label-style">Correo electrónico</ion-label>
            <ion-input type="email" required v-model="email" class="input-style"/>
          </ion-item>
          <ion-item>
            <ion-label position="floating" class="label-style">Contraseña</ion-label>
            <ion-input type="password" required v-model="password" class="input-style"/>
          </ion-item>
          <ion-button type="submit" expand="full" class="button-style">Registrarse</ion-button>
          <ion-button expand="full" class="button-style" @click="goToHomePage">Volver</ion-button>
        </form>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonBackButton,
    alertController, 
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  defineComponent({
    name: 'RegisterPage',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonItem,
      IonLabel,
      IonInput,
      IonButton, 
    },
  });
  
  const router = useRouter();

  const user = ref('');
  const email = ref('');
  const password = ref('');
  
  const register = async () => {
  let alertMessage, alertTitle;

  // Lógica de registro
  const storedUser = localStorage.getItem('user');
  const storedPassword = localStorage.getItem('password');

  //console.log('Stored User:', localStorage.getItem(`user_${user.value}`));
  //console.log('Stored Password:', localStorage.getItem(`password_${user.value}`));

  if (storedUser) {
    alertTitle = "Error";
    alertMessage = "El nombre de usuario ya está en uso."
  } else {
    // Lógica para guardar nuevo usuario en localStorage
    const newUser = { user: user.value, email: email.value, password: password.value }; 
    localStorage.setItem('user', user.value);
    localStorage.setItem('password', password.value);

    alertTitle = "Éxito";
    alertMessage = "Registro exitoso. Ahora puedes iniciar sesión.";
  }

  const alert = await alertController.create({
    header: alertTitle,
    message: alertMessage,
    buttons: ["OK"]
  });

  await alert.present();
};

const goToHomePage = () => {
  router.push('/home')
}
  </script>
  
  <style scoped>
  .title-style {
    font-size: 24px;
    font-weight: bold;
  }
  
  .label-style {
    font-size: 16px;
    color: #333; 
  }
  
  .input-style {
    margin-bottom: 10px;
    font-size: 16px;
  }
  
  .button-style {
    margin-top: 20px;
    font-size: 18px;
  }
  </style>
  