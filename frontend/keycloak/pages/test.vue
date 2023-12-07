<template>
  <div class="row justify-center q-gutter-md">
    <q-list bordered class="col-12 col-lg-4">
      <q-item clickable v-ripple v-for="response in responses" :key="response.endpoint">
        <q-item-section avatar>
          <q-icon :color="response.iconColor" :name="response.iconName" size="md" />
        </q-item-section>
        <q-item-section>
          {{ response.endpoint }}
        </q-item-section>
        <q-item-section>
          {{ response.statusCode }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import type { RuntimeConfig } from 'nuxt/schema';

interface IResponse {
  endpoint: string;
  statusCode: number | undefined;
  iconName: string;
  iconColor: string;
}

const endpoints: string[] = [
  '/books/public',
  '/books/all',
  '/books/admin',
  '/books/user',
];

const responses = await Promise.all(endpoints.map(async (endpoint) => {
  const runtimeConfig: RuntimeConfig = useRuntimeConfig();
  const apiUlr: string = runtimeConfig.public.apiUrl;
  const token: string | undefined = useNuxtApp().$keycloak.token;
  const { error } = await useFetch(`${apiUlr}${endpoint}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const statusCode: number | undefined = error.value?.statusCode;

  const response: IResponse = {
    endpoint,
    statusCode,
    iconName: statusCode === 200 || statusCode === 404 ? 'done' : 'block',
    iconColor: statusCode === 200 || statusCode === 404 ? 'green-6' : 'red-6',
  }

  return response;
}));
</script>
