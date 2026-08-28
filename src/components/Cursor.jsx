import { useRef, useState, useEffect, memo } from 'react';
import gsap from 'gsap';

const hasPointerDevice = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const Cursor = memo(function Cursor() {
    const cursorRef = useRef(null);
    const hoveredRef = useRef(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        // Skip on devices without a fine pointer (touch-only)
        if (!hasPointerDevice() || !cursorRef.current) return;

        // Use GSAP's highly optimized quickTo for buttery smooth tracking
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

        const mouseMove = (e) => {
            const offset = 8; // fixed 16px / 2
            xTo(e.clientX - offset);
            yTo(e.clientY - offset);
        };

        // Use event delegation for better performance
        const updateHovered = (nextHovered) => {
            if (hoveredRef.current === nextHovered) return;
            hoveredRef.current = nextHovered;
            setHovered(nextHovered);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest("a, button, .project-card")) {
                updateHovered(true);
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest("a, button, .project-card")) {
                updateHovered(false);
            }
        };

        window.addEventListener("mousemove", mouseMove, { passive: true });
        document.addEventListener("mouseover", handleMouseOver, { passive: true });
        document.addEventListener("mouseout", handleMouseOut, { passive: true });

        // Set initial position quickly if mouse is already on screen
        const setInitialPosition = (e) => {
            const offset = 8;
            gsap.set(cursorRef.current, { x: e.clientX - offset, y: e.clientY - offset });
            window.removeEventListener("mousemove", setInitialPosition);
        };
        window.addEventListener("mousemove", setInitialPosition, { passive: true });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousemove", setInitialPosition);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    // Skip render on touch-only devices
    if (!hasPointerDevice()) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block will-change-transform"
            style={{
                width: 16,
                height: 16,
            }}
        >
            <div
                className="w-full h-full bg-white border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.12)] rounded-full"
                style={{
                    transform: hovered ? 'scale(4)' : 'scale(1)',
                    transition: 'transform 0.15s ease-out',
                }}
            />
        </div>
    );
});

export default Cursor;
