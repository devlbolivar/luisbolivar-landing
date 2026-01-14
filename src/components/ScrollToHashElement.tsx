import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHashElement() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Find element by ID (hash includes #, so remove it if using getElementById, or use querySelector)
            const element = document.getElementById(hash.replace('#', ''));

            if (element) {
                // Smooth scroll to element
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }
    }, [hash]); // Re-run when hash changes

    return null;
}
