import { useEffect, useState } from "react";

const Route = ( {path, children} ) => {
    // this "currentPath" state is only to trigger reRender
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () =>{
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    },[]);

    return window.location.pathname === path ? children : null;
};

export default Route;
