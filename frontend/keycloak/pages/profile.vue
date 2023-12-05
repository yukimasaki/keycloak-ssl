<template>
  <div>
    <input v-model="uuid" type="text" readonly>
  </div>
  <div>
    <input v-model="userName" type="text">
  </div>
</template>

<script setup lang="ts">
import type { IProfile } from '@@/interfaces/IProfile';
import type { IAccessToken } from '@@/interfaces/IAccessToken';
import { jwtDecode } from 'jwt-decode';

const uuid: Ref<string | null> = ref(null);
const userName: Ref<string | null> = ref(null);

// uuidをtokenから取得
const token: string | undefined = useNuxtApp().$keycloak.token;
if (token) {
  const parsedToken: IAccessToken = jwtDecode(token);
  uuid.value = parsedToken.sub;

  const profile: Ref<IProfile> = useState('profile');
  if (profile.value) {
    userName.value = profile.value.userName;
  }
}
</script>
