<template>
    <div class="test">
        <div class="mb-2 mt-4">
            <b-button variant="info" router to="/prosjekter">Prosjekter i produksjon</b-button>
            <b-button variant="info" class="ml-2" router to="/prosjekter/test">Utvalgte prosjekter</b-button>
        </div>
        <h2>Alle prosjekter!!</h2>
    </div>
</template>

<script>
export default {
    name: 'Test'
}
</script>
