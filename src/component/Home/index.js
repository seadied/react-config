import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'

const mapStateToProps = state => ({count: state.count })

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (...args) => dispatch(addTodo(...args)),
    }
}

const Home = (props) => {
    console.log(props)
    return (
        <div className="home"> 
            <h1>home {props.count}</h1>
            <button onClick={() => handleClick(props)}>count++ </button>
         </div>
    )
}

const handleClick = (props) => {
    props.addTodo(123)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)