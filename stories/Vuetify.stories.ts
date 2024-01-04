import type { Meta, StoryObj } from '@storybook/vue3'

import Vuetify from '~/components/vuetify/index.vue'
import VuetifyWithImports from '~/components/vuetify/withImports.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Plugins/Vuetify ',
  component: Vuetify,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Vuetify>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
}

export const WithImports = () => ({
  components: { VuetifyWithImports },
  template: '<VuetifyWithImports />',
})