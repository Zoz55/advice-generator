<script>
  import { getNewAdvice } from "$lib/index.js";
  import Dice from "../lib/components/dice.svelte";
  import Divider from "../lib/components/divider.svelte";
  // let advice = { id: 1, advice: "" };
  // onMount(async () => (advice = await getadvice()));
  export let data;
  let adviceId = "advice of the day";
  let adviceContent = data.title;
  async function newAdvice() {
    const advice = await getNewAdvice();
    adviceId = advice.id;
    adviceContent = advice.advice;
  }
</script>

<svelte:head>
  <title>Advice generator</title>
</svelte:head>

<div class="body">
  <div class="advice-container">
    <p class="advice-id">#{adviceId}</p>
    <p class="advice">"{adviceContent}"</p>
    <div style="padding: 20px 0;">
      <Divider />
    </div>

    <button on:click={newAdvice} class="new-advice">
      <Dice />
    </button>
  </div>
</div>

<style>
  @import "./+page.css";
</style>
