import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://www.zak.com/assets/images/items/product-images/DESD-1300-C_Despicable-Me-Franchise-Plastic-Placemats-zak-designs-hero-1.jpg",
        tags: [ 'I AM JACK RYAN', 'I AM JHON', 'I AM JOY BRICK']
        // tags: []
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    renderTags() {

        if (this.state.tags.length === 0) return <h3>PLEASE CREATE A NEW TAGS!</h3>
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>

    }
    handleIncrement = product => {
        console.log(product)
        this.setState({ count: this.state.count + 1});
        // this.setState({ id: 1})

        // console.log("Increment clicked")

    };

    render() { 
        return (
            <div>
                {this.props.id}

                {/* <img src ={this.state.imageUrl} alt="Image" height= "200px" width= "200px"/> */}
            <span className={this.getBadgeClasses()} style={this.styles}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.handleIncrement ({product: this.state.count + 1})} 
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
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
        const {count} = this.state;
        return count === 0 ? 'Zero' : count === 1 ? 'One' : count;
    }
}
 
export default Counter;