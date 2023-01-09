<template lang="pug">
  section.video
    .container
      .row
        .col-lg-8.offset-lg-2.col-md-10.offset-md-1
          .video__title.text-center.mb-4 We’re here to change the way the travel industry tracks commissions.
          .video__description.text-center We want to provide ultimate efficiency, accountability, and transparency.
    .container(style="margin-top: 20px;")
      .row
        .col-lg-8.offset-lg-2.col-md-10.offset-md-1
          .video-preview(@click="modal=true")
            video.video-preview__loop(autoplay loop muted playsinline)
              source(type="video/mp4" :src="videoUrl")
            play-icon.video-preview__icon
    .video-modal(v-if="modal" @click="modal=false")
      iframe.video__iframe(
        src="https://player.vimeo.com/video/391518475?autoplay=1"
        frameborder="0" allow="autoplay; fullscreen" allowfullscreen)
      .video-modal__close
        .times &times;
        .esc ESC
</template>
<script>
import PlayIcon from '~/assets/svg/play-video.svg';

export default {
  name: 'VideoSection',
  components: { PlayIcon },
  data() {
    return {
      modal: false,
      videoUrl: `/video/loop.mp4`
    };
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyPress);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyPress);
  },
  methods: {
    handleKeyPress(e) {
      if (e.key === 'Escape') {
        this.modal = false;
      }
    },
  }
};
</script>

<style lang="scss">
@import 'mixins';

section.video {
  .video__title {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2;
    @include media-breakpoint-up(lg) {
      font-size: 40px;
    }
    @include media-breakpoint-up(xl) {
      font-size: 54px;
    }
    @include media-breakpoint-down(md) {
      font-size: 28px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 20px;
    }
  }
  .video__description {
    font-size: 20px;
    @include media-breakpoint-down(md) {
      font-size: 18px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 10px;
    }
  }

  .video__iframe {
    width: 100%;
    height: 500px;
    @include media-breakpoint-down(md) {
      height: 400px;
      margin-top: $spacer * 2;
    }
    @include media-breakpoint-down(sm) {
      height: 200px;
      margin-top: $spacer;
    }
  }
}

.video-preview {
  position: relative;
  &:hover {
    cursor: pointer;
    .video-preview__icon {
      fill: darken(color(primary), 5%);
    }
  }
  &__loop {
    width: 100%;
  }
  &__icon {
    position: absolute;
    display: block;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    fill: color(primary);
    transition: fill 0.3s;
  }
}

.video-modal {
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &__close {
    position: fixed;
    z-index: 11;
    top: 25px;
    right: 25px;
    background: rgba(255, 255, 255, 0.5);
    color: #fff;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 1;
    .times {
      font-size: 22px;
    }
    .esc {
      font-size: 9px;
      opacity: 0.6;
    }
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
