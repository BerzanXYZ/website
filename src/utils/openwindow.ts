export default function openInNewTab(url: string) {
    setTimeout(() => {
        window.open(url, `_blank`)
    }, 500);
}