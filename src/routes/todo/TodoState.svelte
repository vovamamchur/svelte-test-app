<script>
    import Todo from './Todo.svelte';

    let todoList = [
        {text: 'Write my first post', completed: true},
        {text: 'Upload the post to the blog', completed: false},
        {text: 'Publish the post at Facebook', completed: false}
    ];

    const addItem = (newItem) => {
        todoList = [...todoList, {text: newItem, completed: false}];
    }

    const removeItem = (index) => {
        todoList.splice(index, 1);
        todoList = todoList;
    }
</script>

<!--{@debug todoList}-->

<!-- bind uses to save todoList state exactly in TodoState state -->
<Todo bind:todoList={todoList} onAddItem={addItem} onRemoveItem={removeItem} />