import React, { Component } from 'react';
class Counter extends Component {

    render() { 
        // console.log(this.props)
        return (
            <div>
                {this.props.children}

                {/* <img src ={this.state.imageUrl} alt="Image" height= "200px" width= "200px"/> */}
            <span className={this.getBadgeClasses()} style={this.styles}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.handleIncrement (this.props.counter)} 
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.state.tags.length === 0 && <h2>THERE IS NO TAGS!</h2>}
                { this.renderTags()} */}
                
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : (this.state.count === 1) ? "primary" : "danger";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count === 1 ? 'One' : count;
    }
}
 
export default Counter;