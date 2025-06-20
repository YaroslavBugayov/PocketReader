import { useEffect, useState } from 'react';
import { ColorSchemeName, useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
const useColorScheme = (): ColorSchemeName => {
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true);
    }, []);

    const colorScheme = useRNColorScheme();

    if (hasHydrated) {
        return colorScheme;
    }

    return 'light';
};

export default useColorScheme;
