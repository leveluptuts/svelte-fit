export const fit = (node, { min_size = 10, max_size = 100 } = { min_size: 10, max_size: 100 }) => {
    const on_resize = () => {
        if (node.parentElement) {
            resize_text(node, node.parentElement, min_size, max_size);
        }
    };
    const resize_observer = new ResizeObserver(on_resize);
    resize_observer.observe(node === null || node === void 0 ? void 0 : node.parentElement);
    return {
        destroy() {
            resize_observer.disconnect();
        },
    };
};
function is_overflow({ clientWidth, clientHeight, scrollWidth, scrollHeight, }) {
    return scrollWidth > clientWidth || scrollHeight > clientHeight;
}
function resize_text(element, parent, min_size, max_size) {
    let i = min_size;
    let overflow = false;
    let size = min_size;
    element.style.fontSize = `${size}px`;
    while (!overflow && i < max_size) {
        overflow = is_overflow(parent);
        if (!overflow) {
            // If not overflowing, increase the font size
            element.style.fontSize = `${i}px`;
            i++;
        }
    }
    size = i - 2;
    // console.log('overflow', i, size, element)
    element.style.fontSize = `${size}px`;
}
export const parent_style = `display: inline-block; width: 100%; height: 100%;`;
