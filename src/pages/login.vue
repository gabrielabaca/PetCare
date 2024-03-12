<template>
  <div class="col-start-2 border justify-center rounded-md p-4 bg-white">
    <NuxtImg
      src="img/petcare_logo_full.png"
      class="ml-auto mr-auto mb-5"
    ></NuxtImg>
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item label="Username">
        <el-input
          v-model="formInline.userName"
          placeholder="Username"
          clearable
        />
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="formInline.password"
          type="Password"
          placeholder="password"
          clearable
        />
      </el-form-item>
      <el-form-item class="grid-rows-2 float-end">
        <el-button type="primary" :loading="loading" @click="login"
          >Login</el-button
        >
        <el-button>Forgot password</el-button>
      </el-form-item>
      <el-alert
        v-show="showError"
        title="Login error!"
        type="error"
        show-icon
        :closable="false"
      />
    </el-form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { reactive, ref } from "vue";
const { signIn } = useAuth();

const formInline = reactive({
  userName: "",
  password: "",
});

const loading = ref(false);
const showError = ref(false);

const login = async () => {
  try {
    loading.value = true;
    const { error, url } = await signIn(
      {
        username: formInline.userName,
        password: formInline.password,
      },
      {
        callbackUrl: "/",
      },
    );

    if (error) {
      console.log(error);
    } else {
      return navigateTo(url, { external: true });
    }
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};
</script>
