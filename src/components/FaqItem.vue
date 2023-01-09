<template lang="pug">
  .faq-item
    .faq-item__header(@click="open = !open")
      .faq-item__question {{faq.question}}
      arrow.faq-item__icon(:class="{open}")
    .faq-item__answer(v-if="open") {{faq.answer || 'No answer yet.'}}
</template>

<script>
import Arrow from '~/assets/svg/arrow-up.svg';

export default {
  name: 'FaqItem',
  components: { Arrow },
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss">
@import 'mixins';
.faq-item {
  padding: $spacer * 2 0;
  border-top: 1px solid #eee;
  @include media-breakpoint-down(sm) {
    font-size: 16px;
    padding: $spacer 0;
  }

  &:last-child {
    border-bottom: 1px solid #eee;
  }
  &__question {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    @include media-breakpoint-down(sm) {
      font-size: 16px;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icon {
    width: 18px;
    fill: color('text-gray');
    transition: transform 0.3s;
    &.open {
      transform: rotate(180deg);
    }
  }
  &__answer {
    padding: 2rem;
    padding-bottom: 0;
    line-height: 1.6;
    animation: fIn 0.5s;
  }
}

@keyframes fIn {
  from { opacity: 0; transform: translateY(-10px)}
}
</style>
