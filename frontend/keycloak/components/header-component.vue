<template>
  <q-header elevated class="q-pa-sm bg-light-blue-6">
    <q-toolbar>
      <q-toolbar-title @click="navigateToIndex()">Keycloak サンプル</q-toolbar-title>
      <q-btn flat dense icon="login" @click="login()">Login</q-btn>
      <!-- <q-btn flat dense icon="login" @click="login()" v-if="!token">Login</q-btn> -->
      <!-- <q-btn flat dense icon="logout" @click="logout()" v-if="token">Logout</q-btn> -->
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const { signIn } = useAuth();

const navigateToIndex = () => {
  return navigateTo('/');
}

const login = async () => {
  return await signIn('keycloak');
}

// const login = async () => {
//   return await useNuxtApp().$keycloak.login({
//     redirectUri: window.origin,
//   });
// }

// const logout = async () => {
//   return await useNuxtApp().$keycloak.logout();
// }

// const token: string | undefined = useNuxtApp().$keycloak.token;
</script>
