# TSX (JSX) XAML-like Render Template Props

This is a stub repository where I aim to prototype a solution to React components with multiple render surfaces
in a way similar to how XAML templates used to work.

An example of a component that would benefit from this would be a modal / tooltip component which needs its children
it renders and wraps around but also the content that appears on hover / click - the modal window content or the tip
content.

Another example would be any component that renders a set of components based off a template.

This is currently solved most commonly by render props, a "pattern" (once of many instances in software development
where obvious and barely even deserving of a name for how small they are things get named and recognized as patterns)
that proped up in recent years by the React community looking for a solution to this.

An example of what this would look like:

```tsx
<Tooltip>
  <Tooltip.Content>
    This is the tooltip content.
  </Tooltip.Content>
  Hover over this area to see a tooltip.
</Tooltip>
```

I am not yet clear on how to implement this completely but I am pretty sure it will work. It should boil down to
using `React.Children` to filter out the "prop components" and use their values if they are missing in the actual
props of the component (so any "prop component" is mutually exclusive with a prop on the component).

It will probably make sense to enforce that these prop components come before any legit children.
