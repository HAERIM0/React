import React, { Component } from 'react'
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './ThemeContext';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };
        this.toggleTheme = () => {
            this.setState((prev) => ({
                theme: prev.theme === themes.dark ? themes.light : themes.dark,
            }))
        }
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemedButton />
            </div>
        )
    }
}
