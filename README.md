# React tooltip

This tooltip component aims at being small and simple. Display an element's title in a customizable way. Nothing else.

If you want something more advanced you probably want [react-tooltip](https://github.com/wwayne/react-tooltip).

## Install

Install it like any other package:

```
npm install react-tip --save
// or
yarn add react-tip
```

## How to use it

The component is designed as a [HoC](https://reactjs.org/docs/higher-order-components.html). Meaning that you wrap any component that you want a tooltip on with this component, the result will be an enhanced version of your component with the necessary events and stuff to make the tooltip come alive.

```jsx
let Button = props => (
    <button {...props}>{props.children}</button>
);

Button = tooltip(Button);

const App = () => (
    <div>
        <Button href="https://reactjs.org" title="Title text">Hover me</Button>
    </div>
);
```

## How to style it

You can use either css classes inline styles. Below are the available options:

```js
// Simple css classes (uses BEM for creating additional elements and modifiers)
{
    className: 'react-tip',
}

// Full-control css classes
{
    className: {
        container: 'react-tip',
        content: 'react-tip-content'
    }
}

// Inline styles
{
    className: null,
    styles: {
        container: {
            background: '#D05966',
        },
        content: {
            color: '#EDEBE4',
        }
    }
}
```

You pass the configuration object as a second parameter when you create your tooltip-enhanced component.

```js
tooltip(MyComponent, {});
```

You can also set default styling for all tooltips by passing null as the first parameter.

```js
tooltip(null, {});
```

Passing a configuration object when you create tooltip-enhanced components will override the default settings.
