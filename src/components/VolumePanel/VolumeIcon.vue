<template>
  <div>
    <img class="icon" src="./../../assets/volume/volume-medium.svg"/>
  </div>
</template>

<script>
  export default {
    name: 'VolumeIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .icon {
    width: 60px;
    height: 48px;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.10);
  }
</style>
