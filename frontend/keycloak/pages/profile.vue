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
const uuid: Ref<string | null> = ref(null);
const userName: Ref<string | null> = ref(null);

const { data } = await useFetch('/api/profiles/me');

if (data.value.errorCode) {
  uuid.value = data.value.keycloakUuid;
}

if (!data.value.errorCode) {
  useState('profile', () => data.value);
  uuid.value = data.value.uuid;
  userName.value = data.value.userName;
}

const submit = async () => {
  const { data } = await useFetch('/api/profiles', {
    method: 'POST',
    body: {
      uuid: uuid.value,
      userName: userName.value,
    },
  });
  console.log(data.value);

}

</script>
