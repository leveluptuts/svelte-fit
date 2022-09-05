# Svelte Fit 🏃‍♂️🏃‍♀️🏋️

![Bundle Size Badge](https://badgen.net/bundlephobia/minzip/@leveluptuts/svelte-fit)

An extremely simple, no dependency fit text library.

Svelte Kit used and tested

Demo
https://svelte.dev/repl/f249268c09674e1da2400051e7f391ca?version=3.50.0

`npm install @leveluptuts/svelte-fit`

```

<script>
	import { fit, parent_style } from '@leveluptuts/svelte-fit'
</script>

<!-- Must be in a container -->
<div class="container">

	<!-- Parent Wrapping Div -->
	<div style={parent_style}>
		<h1 use:fit>Hello World</h1>
	</div>

</div>

<style>
.container {
		height: 300px;
		width: 300px
	}
</style>

```

### API

#### use:fit

`use:fit={{min_size: 12, max_size:100 }}`

| Options  | Default |
| -------- | ------- |
| min_size | 12      |
| max_size | 100     |

## Contribution

### Possible Improvements

I'd like to keep this package as tiny as possible, but that doesn't mean I don't want to make it better. Here are some ideas.

- Choose width / both for choosing when to stop growing. width would prevent all whitespace breaks.
- Throttling
- Maybe dynamically add "parent div" from action itself

## Sponsors

### Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers
Syntax

Learn Svelte!

### https://syntax.fm/

A Tasty Treats Podcast for Web Developers. Ft Wes Bos & Scott Tolinski

Thank you!

<!-- BOOK Yourself -->
<!-- Flights, catering, hotel -->
<!-- Arrive on Monday -->
<!-- Arrive 14?, 15th? Whenever -->
<!-- WS on 16th 17th, 18th -->
<!-- On our own for hotel that aren't during the nights -->
<!-- More central London location? -->
