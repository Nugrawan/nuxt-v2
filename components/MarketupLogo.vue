<template>
    <div :class="[container, 'flex gap-3 items-center px-3 rounded-sm cursor-pointer']">
        <h1 class="text-3xl font-bold mx-auto" :class="text">
            Market<span class="text-gray">Up</span>
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        container: {
            default: '',
            type: String
        },
        text: {
            default: '',
            type: String
        }
    }
}
</script>