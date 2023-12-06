<template>
  <q-header elevated class="q-pa-sm bg-light-blue-6">
    <q-toolbar-title @click="navigateToIndex()">
      Keycloak サンプル
    </q-toolbar-title>
  </q-header>
</template>

<script setup lang="ts">
const navigateToIndex = () => {
  return navigateTo('/');
}
</script>
