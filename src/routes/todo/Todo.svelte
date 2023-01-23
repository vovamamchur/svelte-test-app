<script>
    export let todoList = [];
    export let onAddItem;
    export let onRemoveItem;

    let newItem = '';
    let disabled = true;
    $: disabled = newItem.trim() === "";

    const handleAddItem = () => {
        onAddItem && onAddItem(newItem);
        newItem = '';
    }
</script>

<input bind:value={newItem} type="text" placeholder="new todo item..">
<button disabled={disabled} on:click={handleAddItem}>Add</button>

<br/>
{#each todoList as item, index}
    <input bind:checked={item.completed} type="checkbox">
    <span class:checked={item.completed}>{item.text}</span>
    <button on:click={() => onRemoveItem(index)}>Remove</button>
    <br/>
{/each}

<style>
    .checked {
        text-decoration: line-through;
    }
</style>