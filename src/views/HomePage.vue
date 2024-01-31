<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="black">
        <ion-title class="ion-text-center title-style">Iniciar sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <form @submit.prevent="onSubmit" class="ion-padding">
        <ion-item>
          <ion-label position="floating" class="label-style">Nombre de usuario</ion-label>
          <ion-input type="text" required v-model="user" class="input-style"/>
        </ion-item>
        <ion-item>
          <ion-label position="floating" class="label-style">Contraseña</ion-label>
          <ion-input type="password" required v-model="password" class="input-style"/>
        </ion-item>
        <ion-button type="submit" expand="full" class="button-style">Login</ion-button>
        <ion-button expand="full" class="button-style" @click="goToRegisterPage">Registrarse</ion-button>
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
  alertController, 
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

defineComponent({
  name: 'HomePage',
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

// Funcionamiento del login

const user = ref<string>('');
const password = ref<string>('');



const onSubmit = async() =>{
  let alertMessage, alertTitle;


const storedUser = localStorage.getItem('user');
const storedPassword = localStorage.getItem('password');



  if (user.value == storedUser && password.value == storedPassword){
    alertTitle = "¡Exito!";
    alertMessage = "Se ha iniciado sesión correctamente";

  // Almacenamiento del estado del login en localStorage
  localStorage.setItem('isLoggedIn', 'True');
  } else {
    alertTitle = "Error";
    alertMessage = "Datos incorrectos, por favor, compruebe su usuario y contraseña";
  }

  const alert = await alertController.create({
    header: alertTitle,
    message: alertMessage,
    buttons: ["OK"],
  });

  await alert.present();
};

const goToRegisterPage = () => {
  router.push('/register');
}

</script>

<!-- Estilos para el login -->

<style scoped>

.title-style {
  font-size: 24px;
  font-weight: bold;
}
.label-style {
  font-size: 16px;;
  color: #333;
}
.input-style {
  margin-bottom: 10px;
}

.button-style {
  margin-top: 20px;
  font-size: 18px;
}

</style>
