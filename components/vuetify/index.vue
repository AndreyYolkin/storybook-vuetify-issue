<script setup>
defineProps({
  message: String,
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet
          class="pa-4 d-flex align-center flex-column"
          color="grey-lighten-3"
          rounded="lg"
        >
          <div>
            <v-btn>
              Test
            </v-btn>
            <v-icon
              color="orange"
              icon="mdi-fire"
            />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet class="pa-4 d-flex align-center flex-column">
          Storybook <v-icon
            color="pink"
            icon="mdi-heart"
          /> Nuxt
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-4 d-flex justify-space-between flex-row">
          Storybook <v-icon
            color="pink"
            icon="mdi-heart"
          /> Nuxt
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-4 d-flex align-center flex-column">
          Storybook <v-icon
            color="pink"
            icon="mdi-heart"
          /> Nuxt
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
