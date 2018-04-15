export default class ScrollUtil {
    private constructor() {}

    /**
     * jump
     * @param y
     * @param element
     */
    public static jump(y: number,
            element: Element | null = document.scrollingElement) {
        if (element == null) {
            return;
        }

        element.scrollTo(0, y
            - (document.documentElement.offsetHeight
            - document.body.offsetHeight));
    }

    /**
     * animation ease
     * @param y
     * @param duration
     * @param element
     */
    public static animate(y: number, duration: number = 750,
            element: Element | null = document.scrollingElement) {
        if (element == null) {
            return;
        }

        const tick = 15;
        const initialHeight: number = element.scrollTop;
        const scrollHeight: number = y - element.scrollTop
            - (document.documentElement.offsetHeight
            - document.body.offsetHeight);
        const scrollStep: number = Math.PI / (duration / tick);
        const cosParam: number = scrollHeight / 2;

        let scrollCount: number = 0;
        let scrollY: number;

        const scrollInterval = setInterval(() => {
            if (Math.abs(scrollCount * scrollStep) < Math.PI) {
                scrollY = cosParam + cosParam * (Math.cos(++scrollCount * scrollStep) * -1);
                element.scrollTo(0, initialHeight + scrollY);
            } else {
                clearInterval(scrollInterval);
            };
        }, tick);
    }
}
