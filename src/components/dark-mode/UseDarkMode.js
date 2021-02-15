import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler, mountedComponent]
};

class UseDarkMode extends React.Component {

    state = {
        theme: "light",
        setTheme: "light",
        mountedComponent: "false",
        setMountedComponent: "false"
    }
    setMode = mode => {
        return (
            //window.localStorage.setItem('theme', mode)
            this.setState({ setTheme: mode })
        )
    };
    themeToggler = () => {
        return (
            theme === 'light' ? setMode('dark') : setMode('light')
        )
    };

    render() {
        return (
            <div>
                {this.setMode}
                {this.themeToggler}
            </div>
        )
    }
}

export default UseDarkMode;