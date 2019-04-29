<template>

    <div>
        <p>This is about page.</p>
        <b-card
                header="This is the Header of this card"
                footer="Ths is the footer of this card"
                title="This is Card Tile"
                class="m-3">
            <b-card-text>This is a Card Text</b-card-text>
            <b-button variant="primary" :to="{path: 'home'}">This is the button inside card. So, lets go Home!
            </b-button>
        </b-card>
    </div>
</template>
export default {}
<script>
</script>
