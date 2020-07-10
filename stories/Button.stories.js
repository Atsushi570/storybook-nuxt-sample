import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Button from '~/components/Button.vue'

storiesOf('atoms.Button', module).add('colors', () => ({
  components: { Button },
  template: `
      <div style="display: flex; flex-direction:column; align-items:center;">
        <Button colors="is-primary" @click="action" btn-text="is-primary" style="margin: 16px 0;"></Button>
        <Button colors="is-info" @click="action" btn-text="is-info" style="margin: 16px 0;"></Button>
        <Button colors="is-danger" @click="action" btn-text="is-danger" style="margin: 16px 0;"></Button>
      </div>
    `,
  methods: { action: action('クリックされました') },
}))
