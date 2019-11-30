import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
            {id: 6, value: 0},
        ]
     };
     handleReset = () => {
         const counters = this.state.counters.map(c => { 
            c.value = 0;
            return c;
         });
         this.setState({counters})
     }
     handleDelete = (counterId) => {
        //  console.log("Event Handler Called on click", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState( { counters } );
     };
     handleIncrement = counter => {
         console.log(counter);
     };
    render() { 
        return ( 
            <div>
                {this.props.children}
                <button 
                    onClick= {this.handleReset}
                    className="btn btn-primary sm m-2">Reset</button>
               {
                   this.state.counters.map( counter => (
                       <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement}
                        counter={counter}
                        >
                       {/* <h4>Counter {counter.id}</h4> */}
                       </Counter>
                       ))
                }
            </div>
         );
    }
}
 
export default Counters;