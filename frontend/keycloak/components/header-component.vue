<template>
  <q-header elevated class="q-pa-sm bg-light-blue-6">
    <q-toolbar>
      <q-toolbar-title @click="navigateToIndex()">Keycloak サンプル</q-toolbar-title>
      <q-btn flat dense icon="logout" @click="logout()" v-if="token">Logout</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const navigateToIndex = () => {
  return navigateTo('/');
}

const logout = async () => {
  return await useNuxtApp().$keycloak.logout();
}

const token: string | undefined = useNuxtApp().$keycloak.token;
</script>
