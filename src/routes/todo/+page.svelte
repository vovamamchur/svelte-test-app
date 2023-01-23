<script>
    import TodoState from "./TodoState.svelte";
    import TodoStorage from "./TodoStorage.svelte";

    let type = "state";
</script>

<svelte:head>
    <title>TODO</title>
    <meta name="description" content="TODO apps page" />
</svelte:head>

<div>
    <h3>TODO</h3>
    <a href="/todo/about">About</a>

    <form>
        <h3>Choose todo app type</h3>
        <label>
            <input type=radio bind:group={type} name="type" value="state">
            State
        </label>

        <label>
            <input type=radio bind:group={type} name="type" value="storage">
            Storage
        </label>

    </form>

    {#if type === "state"}
        <TodoState />
    {:else}
        <TodoStorage />
    {/if}
</div>