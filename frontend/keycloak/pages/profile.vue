<template>
  <div class="row q-pa-md justify-center q-gutter-md">
    <q-card class="col-12 col-md-6">
      <q-card-section>
        <div class="text-h6">
          プロフィール
        </div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="uuid" label="Keycloak ID" readonly />
        <q-input v-model="userName" label="表示名" />
      </q-card-section>

      <q-card-actions>
        <q-btn class="col-4">
          キャンセル
        </q-btn>
        <q-btn class="col-4" @click="submit()">
          保存
        </q-btn>
      </q-card-actions>
    </q-card>
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

const submit = async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl: string = runtimeConfig.public.apiUrl;

  return await useFetch(`${apiUrl}/profiles`, {
    method: 'POST',
    body: {
      uuid: uuid.value,
      userName: userName.value,
    },
  });
}
</script>
