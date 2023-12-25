<template>
  <div class="row justify-center q-gutter-md">
    <q-card class="col-12 col-md-6">
      <q-card-section class="bg-light-blue-4">
        <div class="text-h6 text-white">
          プロフィール
        </div>
      </q-card-section>

      <q-card-section>
        <q-input class="q-pb-sm" v-model="uuid" label="Keycloak ID" readonly />
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
import type { IProfile } from '~/interfaces/IProfile';

const uuid: Ref<string | null> = ref(null);
const userName: Ref<string | null> = ref(null);

const { data: profile }: { data: Ref<IProfile> } = await useFetch('/api/profiles/me');
console.log(profile.value);

uuid.value = profile.value.uuid;
userName.value = profile.value.userName;

const submit = async () => {
}

</script>
