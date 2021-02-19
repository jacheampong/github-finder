import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChangeText = (event) => {
        console.log(`target => ${event.target.value}`)
        // this.setState({text: target.value})
        this.setState({ [event.target.name] : event.target.value})
        // event.preventDefault()
    }

    onSubmit = (e) => {
        e.preventDefault()
        // console.log( e.target.value )
        if (this.state.text === '') {
            this.props.setAlert('Enter valid input', 'light')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }
    }

    render() {

        const { showClear, clearUsers } = this.props

        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" 
                        name="text" 
                        placeholder="Search users ..."
                        value={this.state.text} 
                        onChange={this.onChangeText}
                    />
                    <input 
                        type="submit" 
                        value="Search" onClick={this.onSubmit} 
                        className="btn btn-dark btn-block" 
                    />
                </form>
                {
                    showClear && <button 
                    className="btn btn-light btn-block"
                    onClick={clearUsers}>Clear</button>
                }
                
            </div>
        )
    }
}

export default Search
