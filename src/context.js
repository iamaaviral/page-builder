import React from 'react';

const Context = React.createContext('page');

class PageContext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
           formInput: {
               text: '',
               x: 0,
               y: 0,
               size: 0,
               weight: 0
           },
           toggleForm: () => {
               this.setState(state => {
                return {
                    showForm: !state.showForm
                };
              })
           }
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

const ContextHOC = (SomeComponent, props) => {
    return (
        <Context.Consumer>
            {val => <SomeComponent {...val} {...props} />}
        </Context.Consumer>
    );
};

export {
    ContextHOC,
    Context,
    PageContext
};
