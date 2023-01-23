<script>
    import {onDestroy} from "svelte";
    import Todo from "./Todo.svelte";
    import { list } from './store';

    let todoList;

    const unsubscribe = list.subscribe((value) => {
        todoList = value;
    })

    const addItem = (newItem) => {
        list.update((value) => [...value, {text: newItem, completed: false}]);
    }

    const removeItem = (index) => {
        list.update((value) => {
            value.splice(index, 1);
            return value;
        });
    }

    onDestroy(unsubscribe);
</script>


<!--{@debug todoList}-->
<!--store handler for the "completed" prop is not implemented -->
<Todo todoList={todoList} onAddItem={addItem} onRemoveItem={removeItem} />