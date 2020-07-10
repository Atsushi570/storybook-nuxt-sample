import { configure } from '@storybook/vue'
import 'bulma/css/bulma.css'

// storiesディレクトリにある*.stories.jsファイルを読み込む
configure(require.context('../stories', true, /\.stories\.js$/), module)
