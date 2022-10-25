export const fit = (
	node: HTMLElement,
	{ min_size = 10, max_size = 100 } = { min_size: 10, max_size: 100 }
): { destroy: () => void } => {
	const on_resize = (): void => {
		if (node.parentElement) {
			resize_text(node, node.parentElement, min_size, max_size)
		}
	}

	on_resize()
	// const resize_observer = new ResizeObserver(on_resize)
	// resize_observer.observe(node?.parentElement as HTMLElement)

	// return {
	// 	destroy(): void {
	// 		resize_observer.disconnect()
	// 	},
	// }
}

function is_overflow({
	clientWidth,
	clientHeight,
	scrollWidth,
	scrollHeight,
}: HTMLElement): boolean {
	return scrollWidth > clientWidth || scrollHeight > clientHeight
}

function resize_text(
	element: HTMLElement,
	parent: HTMLElement,
	min_size: number,
	max_size: number
): void {
	let i: number = min_size
	let overflow: boolean = false
	let size: number = min_size
	element.style.fontSize = `${size}px`

	while (!overflow && i < max_size) {
		overflow = is_overflow(parent)

		if (!overflow) {
			// If not overflowing, increase the font size
			element.style.fontSize = `${i}px`
			i += 2
		}
	}
	size = i - 2
	// console.log('overflow', i, size, element)
	element.style.fontSize = `${size}px`
}

export const parent_style = `display: inline-block; width: 100%; height: 100%;`
