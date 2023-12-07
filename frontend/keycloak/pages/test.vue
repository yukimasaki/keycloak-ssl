<template>
  <div class="row justify-center q-gutter-md">
    <div class="col">
      <div class="text-h6 q-pb-md">
        Your Roles
        <p class="text-body1 q-ma-none" v-for="role in roles">
          [ {{ role }} ]
        </p>
      </div>
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

  </div>
</template>

<script setup lang="ts">
import { jwtDecode } from 'jwt-decode';
import type { RuntimeConfig } from 'nuxt/schema';
import type { IAccessToken } from '@@/interfaces/IAccessToken';

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

const runtimeConfig: RuntimeConfig = useRuntimeConfig();
const apiUlr: string = runtimeConfig.public.apiUrl;
const token: string | undefined = useNuxtApp().$keycloak.token;

const responses = await Promise.all(endpoints.map(async (endpoint) => {
  const { status, error } = await useFetch(`${apiUlr}${endpoint}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const statusCode: number | undefined = status.value === 'success' ? 200 : error.value?.statusCode;
  const response: IResponse = {
    endpoint,
    statusCode,
    iconName: statusCode === 200 || statusCode === 404 ? 'done' : 'block',
    iconColor: statusCode === 200 || statusCode === 404 ? 'green-6' : 'red-6',
  }
  return response;
}));

const parsedToken: Ref<IAccessToken | null> = ref(null);
if (token) {
  parsedToken.value = jwtDecode(token);
}
const roles: Ref<string[] | null> = ref(null);
if (parsedToken.value) {
  roles.value = parsedToken.value.resource_access['nestjs-sample'].roles;
}
</script>
