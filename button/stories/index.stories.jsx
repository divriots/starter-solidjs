import { render } from 'solid-js/web';
import { Button } from '..';

export default {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
};

export const button = () => ({
  _$story_type$: 'RenderProp',
  render(root) {
    render(() => <Button>Hello Rioters 🤘 ! </Button>, root);
  },
});
