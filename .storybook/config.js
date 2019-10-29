import { configure } from '@storybook/react';
import { action } from "@storybook/addon-actions"

// SEE: https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
global.___loader = {
  enqueue: () => { },
  hovering: () => { },
}
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

configure(require.context('../src', true, /stories\.tsx?$/), module);
