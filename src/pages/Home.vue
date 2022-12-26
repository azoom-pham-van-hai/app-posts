<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-wrapper">
    <h1 class="title">Welcome to our blog</h1>
    <h5 class="title">Follow us on</h5>
    <div class="icons">
      <facebook-icon></facebook-icon>
      <instagram-icon></instagram-icon>
      <youtube-icon></youtube-icon>
      <pinterest-icon></pinterest-icon>
      <twitter-icon></twitter-icon>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "../assets/icons/FacebookIcon.vue";
import TwitterIcon from "../assets/icons/TwitterIcon.vue";
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import PinterestIcon from "../assets/icons/PinterestIcon.vue";
import YoutubeIcon from "../assets/icons/YoutubeIcon.vue";

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    PinterestIcon,
    YoutubeIcon,
  },
};
</script>

<style scoped lang="scss">
.home-wrapper {
  > .title {
    color: #fff;
  }

  > .icons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>
