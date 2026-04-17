export const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    transition: {
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
});