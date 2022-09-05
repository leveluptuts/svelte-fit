# Svelte Fit Text

An extremely simple, no dependency fit text library.

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

## Sponsors

### Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers
Syntax

Learn Svelte!

### https://syntax.fm/

A Tasty Treats Podcast for Web Developers. Ft Wes Bos & Scott Tolinski

Thank you!
