export default function (stylesCSS) {
    const style = document.createElement('style');
    style.textContent = stylesCSS;
    document.head.append(style);
}
