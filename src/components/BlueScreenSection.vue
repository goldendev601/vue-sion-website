<template lang="pug">
  section.bluescreen
    .container(v-waypoint="{active: true, callback: onWaypoint, intersectionOptions}")
      .row.bluescreen__content
        .col.col-md-10.offset-md-1.offset-lg-0.col-lg-12
          vue-typer.crt-green.d-block.d-md-inline-block(
            v-if="start"
            :repeat='0'
            :pre-type-delay="500"
            text="¥ SEARCHING FOR A BETTER "
            :type-delay="typeDelay"
            @completed="handleLineCompleted(1)"
          )
          vue-typer.crt-green.d-block.d-md-inline-block(
            :repeat='0'
            text="WAY TO TRACK "
            :type-delay="typeDelay"
            v-if="lineCompleted >= 1"
            @completed="handleLineCompleted(2)"
          )
          vue-typer.crt-green.d-block.d-lg-inline-block(
            :repeat='0'
            text="TRAVEL COMMISSIONS?«"
            :type-delay="typeDelay"
            v-if="lineCompleted >= 2"
            @completed="handleLineCompleted(3)"
          )
          .bluescreen__midsection(v-if="lineCompleted >= 3")
            .d-block ** WE GET IT. WE’RE <span class="crt-blue">TRAVEL AGENTS</span> TIRED OF **
            .crt-blue.ml-3.ml-md-5.d-block OUTDATED
            .crt-blue.ml-3.ml-md-5.d-block COMPLICATED
            .crt-blue.ml-3.ml-md-5.d-block S¥#!*
            .d-block TECHNOLOGY. SO WE MADE SOMETHING BETTER.

            //- vue-typer(
            //-   text="" 
            //-   :repeat="0" 
            //-   :type-delay="typeDelay"
            //-   :pre-type-delay="preTypeDelay"
            //-   v-if="lineCompleted >= 3"
            //-   @completed="handleLineCompleted(4)"
            //- )
            //- vue-typer.crt-blue(
            //-   text="" 
            //-   :repeat="0" 
            //-   :type-delay="typeDelay"
            //-   v-if="lineCompleted >= 4"
            //-   @completed="handleLineCompleted(5)"
            //- 
            //- )
            //- vue-typer(
            //-   text=" TIRED OF **" 
            //-   :repeat="0" 
            //-   :type-delay="typeDelay" 
            //-   v-if="lineCompleted >=5"
            //-   @completed="handleLineCompleted(6)"
            //- )
          //- 
          //- vue-typer.crt-blue.ml-3.ml-md-5.d-block(
          //-   text="OUTDATED" 
          //-   :repeat="0" 
          //-   :pre-type-delay="preTypeDelay/2" 
          //-   :type-delay="typeDelay"
          //-   v-if="lineCompleted >=6"
          //-   @completed="handleLineCompleted(7)"
          //- )
          //- vue-typer.crt-blue.ml-3.ml-md-5.d-block(
          //-   text="COMPLICATED" 
          //-   :repeat="0" 
          //-   :pre-type-delay="preTypeDelay/2" 
          //-   :type-delay="typeDelay"
          //-   v-if="lineCompleted >= 7"
          //-   @completed="handleLineCompleted(8)"
          //- )
          //- vue-typer.crt-blue.ml-3.ml-md-5.d-block(
          //-   text="S¥#!*" 
          //-   :repeat="0" 
          //-   :pre-type-delay="preTypeDelay/2" 
          //-   :type-delay="typeDelay"
          //-   v-if="lineCompleted >= 8"
          //-   @completed="handleLineCompleted(9)"
          //- )
          //- vue-typer.d-block.d-lg-inline-block(
          //-   text="TECHNOLOGY. SO WE MADE " 
          //-   :repeat="0" 
          //-   :type-delay="typeDelay" 
          //-   :pre-type-delay="preTypeDelay/3"
          //-   v-if="lineCompleted >= 9"
          //-   @completed="handleLineCompleted(10)"
          //- )
          //- vue-typer.d-block.d-lg-inline-block(
          //-   text="SOMETHING BETTER." 
          //-   :repeat="0" 
          //-   :type-delay="typeDelay" 
          //-   :pre-type-delay="preTypeDelay/3"
          //-   v-if="lineCompleted >= 10"
          //-   @completed="handleLineCompleted(11)"
          //- )
          br  
          vue-typer.crt-green.d-inline-block(
            :repeat='0'
            text="SION"
            :type-delay="typeDelay"
            :pre-type-delay="1000"
            v-if="lineCompleted >= 3"
            @completed="handleLineCompleted(12)"

          )
          .crt-green.blink-dash(v-if="lineCompleted >= 12") _
</template>

<script>
export default {
  name: 'BlueScreenSection',
  data() {
    return {
      start: false,
      lineCompleted: 0,
      typeDelay: 50,
      preTypeDelay: 900,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      }
    };
  },
  methods: {
    handleLineCompleted(line) {
      this.lineCompleted = line;
    },
    startTyping() {
      if (this.start) return;
      this.lineCompleted = 0;
      this.start = true;
    },
    onWaypoint({ direction }) {
      // going: in, out
      // direction: top, right, bottom, left

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.warn('start typing');
        this.startTyping();
      }
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

$bg-color: #0002ae;
$crt-green: #fce851;
$crt-blue: #3fdaff;

section.bluescreen {
  min-height: 60vh;
}
.bluescreen {
  font-family: Courier, Courier New, 'PerfectDOS', monospace;
  color: #fff;
  letter-spacing: 2px;
  font-size: 24px;
  line-height: 1.5;
  background: $bg-color;
  background-image: url('/images/bluescreen-texture-small.png');
  @include media-breakpoint-down(md) {
    font-size: 20px;
    line-height: 1.8;
  }
  @include media-breakpoint-down(sm) {
    font-size: 16px;
    line-height: 2;
  }
  &__content {
    min-height: 252px;
    @include media-breakpoint-down(md) {
      min-height: 360px;
    }
    @include media-breakpoint-down(sm) {
      min-height: 297px;
    }
  }
  &__midsection {
    animation: delayedFadeIn 0.1s;
    animation-delay: 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .vue-typer {
    .custom.char {
      color: #fff;
    }
    .custom.caret {
      background: $crt-green;
    }
  }

  .vue-typer.crt-green {
    .custom.char {
      color: $crt-green;
    }
  }
  .vue-typer.crt-blue {
    .custom.char {
      color: $crt-blue;
    }
  }

  .crt-blue {
    color: $crt-blue;
  }
  .crt-green {
    color: $crt-green;
  }
  .blink-dash {
    display: inline-block;
    animation: blink 0.5s linear infinite alternate;
  }
}

@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes delayedFadeIn {
  from {opacity: 0}
  to { opacity: 1}
}
</style>
