<template>
  <div class="row q-pa-md justify-center q-gutter-md">
    <q-card class="col-12 col-md-6">
      <q-card-section class="bg-light-blue-4">
        <div class="text-h6 text-white">
          プロフィール
        </div>
      </q-card-section>

      <q-card-section>
        <q-input class="q-pb-sm" v-model="uuid" label="Keycloak ID" readonly />
        <q-input class="q-pb-sm" v-model="email" label="メールアドレス" readonly />
        <q-input class="q-pb-sm" v-model="userName" label="表示名" />
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
const email: Ref<string | null> = ref(null);
const userName: Ref<string | null> = ref(null);

// uuidをtokenから取得
const token: string | undefined = useNuxtApp().$keycloak.token;
if (token) {
  const parsedToken: IAccessToken = jwtDecode(token);
  uuid.value = parsedToken.sub;
  email.value = parsedToken.email;

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

console.log(token);

</script>
