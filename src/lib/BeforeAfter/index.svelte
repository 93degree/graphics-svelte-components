<script>
  import { throttle } from 'lodash-es';

  export let width = '';
  export let height = 600;

  export let beforeSrc = null;
  export let beforeAlt = null;
  export let afterSrc = null;
  export let afterAlt = null;

  export let handleColour = 'white';
  export let handleInactiveOpacity = 0.4;
  export let handleMargin = 20;
  export let keyPressStep = 0.05;

  export let offset = 0.5;

  const random4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  const id = 'before-after-' + random4() + random4();

  let img;
  let imgOffset = null;
  let sliding = false;
  let figure;
  let beforeOverlayWidth = 0;
  let isFocused = false;

  const onFocus = () => (isFocused = true);
  const onBlur = () => (isFocused = false);
  const handleKeyDown = (e) => {
    if (!isFocused) return;
    const { keyCode } = e;
    const margin = handleMargin / w;
    if (keyCode === 39) {
      offset = Math.min(1 - margin, offset + keyPressStep);
    } else if (keyCode === 37) {
      offset = Math.max(0 + margin, offset - keyPressStep);
    }
  };

  const resize = (e) => {
    if (e.type === 'load') {
      imgOffset = e.target.getBoundingClientRect();
    } else {
      imgOffset = img.getBoundingClientRect();
    }
  };
  const move = (e) => {
    const el = e.touches ? e.touches[0] : e;
    if (sliding && imgOffset) {
      const figureOffset = figure
        ? parseInt(window.getComputedStyle(figure).marginLeft.slice(0, -2))
        : 0;
      let x = el.pageX - figureOffset - imgOffset.left;
      x =
        x < handleMargin
          ? handleMargin
          : x > w - handleMargin
          ? w - handleMargin
          : x;
      offset = x / w;
    }
  };
  const start = (e) => {
    sliding = true;
    move(e);
  };
  const end = () => {
    sliding = false;
  };

  $: w = (imgOffset && imgOffset.width) || 0;
  $: x = w * offset;
  $: figStyle = `width:100%;height:${height}px;`;
  $: imgStyle = 'width:100%;height:100%;';
  $: beforeOverlayClip =
    x < beforeOverlayWidth ? Math.abs(x - beforeOverlayWidth) : 0;

  if (!(beforeSrc && beforeAlt && afterSrc && afterAlt)) {
    console.warn('Missing required src or alt props for BeforeAfter component');
  }
</script>

<svelte:window
  on:touchmove="{move}"
  on:touchend="{end}"
  on:mousemove="{move}"
  on:mouseup="{end}"
  on:resize="{throttle(resize, 100)}"
  on:keydown="{handleKeyDown}"
/>

{#if beforeSrc && beforeAlt && afterSrc && afterAlt}
  <section class="photo before-after {width}" style="height: {height}px;">
    <figure
      style="{figStyle}"
      class="before-after-container"
      on:touchstart="{start}"
      on:mousedown="{start}"
      bind:this="{figure}"
      aria-labelledby="{$$slots.caption && `${id}-caption`}"
    >
      <img
        bind:this="{img}"
        src="{afterSrc}"
        alt="{afterAlt}"
        on:mousedown|preventDefault
        on:load="{resize}"
        style="{imgStyle}"
        class="after"
        aria-describedby="{$$slots.beforeOverlay && `${id}-before`}"
      />

      <img
        src="{beforeSrc}"
        alt="{beforeAlt}"
        on:mousedown|preventDefault
        style="clip: rect(0 {x}px {height}px 0);{imgStyle}"
        class="before"
        aria-describedby="{$$slots.afterOverlay && `${id}-after`}"
      />
      {#if $$slots.beforeOverlay}
        <div
          id="image-before-label"
          class="overlay-container before"
          bind:clientWidth="{beforeOverlayWidth}"
          style="clip-path: inset(0 {beforeOverlayClip}px 0 0);"
        >
          <slot
            name="beforeOverlay"
            description="{`${id}-before-description`}"
          />
        </div>
      {/if}
      {#if $$slots.afterOverlay}
        <div id="image-after-label" class="overlay-container after">
          <slot name="afterOverlay" description="{`${id}-after-description`}" />
        </div>
      {/if}
      <div
        tabindex="0"
        class="handle"
        style="left: calc({offset *
          100}% - 20px); --before-after-handle-colour: {handleColour}; --before-after-handle-inactive-opacity: {handleInactiveOpacity};"
        on:focus="{onFocus}"
        on:blur="{onBlur}"
      >
        <div class="arrow-left"></div>
        <div class="arrow-right"></div>
      </div>
    </figure>
  </section>
  {#if $$slots.caption}
    <section class="{width}" id="{`${id}-caption`}">
      <slot name="caption" />
    </section>
  {/if}
{/if}

<style lang="scss">
  figure.before-after-container {
    overflow: hidden;
    position: relative;
    box-sizing: content-box;
    margin: 0 auto;

    img {
      top: 0;
      left: 0;
      z-index: 20;
      &.after {
        z-index: 21;
      }
      &.before {
        z-index: 22;
      }
      display: block;
      max-width: 100%;
      user-select: none;
      object-fit: cover;
      position: absolute;
    }
    .overlay-container {
      position: absolute;
      &.before {
        left: 0;
        z-index: 23;
      }
      &.after {
        right: 0;
        z-index: 21;
      }
    }
  }

  .handle {
    z-index: 30;
    width: 40px;
    height: 40px;
    cursor: move;
    background: none;
    user-select: none;
    position: absolute;
    border-radius: 50px;
    top: calc(50% - 20px);
    border: 4px solid var(--before-after-handle-colour);
    opacity: var(--before-after-handle-inactive-opacity, 0.6);
    &:hover,
    &:active,
    &:focus {
      opacity: 1;
    }
    &:before,
    &:after {
      content: '';
      height: 9999px;
      position: absolute;
      left: calc(50% - 2px);
      border: 2px solid var(--before-after-handle-colour);
    }
    &:before {
      top: 40px;
    }
    &:after {
      bottom: 40px;
    }
    .arrow-right,
    .arrow-left {
      width: 0;
      height: 0;
      user-select: none;
      position: relative;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    .arrow-right {
      left: 19px;
      bottom: 13px;
      border-left: 10px solid var(--before-after-handle-colour);
    }
    .arrow-left {
      left: 3px;
      top: 7px;
      border-right: 10px solid var(--before-after-handle-colour);
    }
  }
</style>
