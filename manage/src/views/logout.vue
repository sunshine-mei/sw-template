<template>
  <div class="container">
    退出成功
  </div>
</template>

<script>
export default {
  created(){
    this.logout()
  },
  methods:{
    logout() {
      localStorage.clear();
      sessionStorage.clear();
      window.location = `${serverConfig.AUTH_CAS}/logout?service=${serverConfig.BACKEND_BASE_URL}/study-center-management/`
    }
  }
};
</script>
