export function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export const isMobile = () => (getWindowDimensions().width < 992);