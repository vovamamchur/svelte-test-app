import { writable } from 'svelte/store';

export const list = writable([
    {text: 'Write my first post', completed: true},
    {text: 'Upload the post to the blog', completed: false},
    {text: 'Publish the post at Facebook', completed: false}
]);