<template>
  <div class="row justify-center q-gutter-md">
    <q-list bordered class="col-12 col-lg-4">
      <q-item clickable v-ripple v-for="page in pages" :key="page.displayName" :to="page.link">
        <q-item-section avatar>
          <q-icon :color="page.iconColor" :name="page.iconName" size="md" />
        </q-item-section>
        <q-item-section>
          {{ page.displayName }}
        </q-item-section>
        <q-item-section>
          {{ page.description }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
interface IPage {
  displayName: string;
  link: string;
  description: string;
  iconName: string;
  iconColor: string;
}

const pages: IPage[] = [
  {
    displayName: '/welcome',
    link: '/welcome',
    description: 'Public Access',
    iconName: 'public',
    iconColor: 'light-green-8',
  },
  {
    displayName: '/',
    link: '/',
    description: 'All of Authenticated Users',
    iconName: 'groups',
    iconColor: 'light-blue-8',
  },
  {
    displayName: '/profile',
    link: '/profile',
    description: 'All of Authenticated Users',
    iconName: 'groups',
    iconColor: 'light-blue-8',
  },
  {
    displayName: '/test',
    link: '/test',
    description: 'All of Authenticated Users',
    iconName: 'groups',
    iconColor: 'light-blue-8',
  },
  // {
  //   displayName: '/user',
  //   link: '/user',
  //   description: 'User Role Only',
  //   iconName: 'person',
  //   iconColor: 'amber-8',
  // },
  // {
  //   displayName: '/admin',
  //   link: '/admin',
  //   description: 'Admin Role Only',
  //   iconName: 'admin_panel_settings',
  //   iconColor: 'purple-8',
  // },
];
</script>
