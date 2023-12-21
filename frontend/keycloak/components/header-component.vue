<template>
  <q-header elevated class="q-pa-sm bg-light-blue-6">
    <q-toolbar>
      <q-toolbar-title @click="navigateToIndex()">Keycloak サンプル</q-toolbar-title>
      <q-btn flat dense icon="login" @click="login()" v-if="status === 'unauthenticated'">Login</q-btn>
      <q-btn flat dense icon="logout" @click="logout()" v-if="status === 'authenticated'">Logout</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const { signIn, signOut, status } = useAuth();

const navigateToIndex = () => {
  return navigateTo('/');
}

const login = async () => {
  return await signIn('keycloak');
}

const logout = async () => {
  return await signOut();
}

</script>
