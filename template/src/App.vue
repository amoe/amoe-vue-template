<template>
  <div>
    <p>Hello, world!</p>

    <p>The counter value is: <code>{{counter}}</code></p>

    <button v-on:click="onClick">Click me</button>
  </div>
</template>

<script>
export default {
    name: 'app',
    data: {
        counter: 4
    },
    methods: {
        onClick: function (e) {
            console.log("hello world");
        }
    }
}
</script>
