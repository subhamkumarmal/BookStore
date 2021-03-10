import Book from '../Book.jsx';
import {connect} from 'react-redux';
import {AddToCartAction} from '../services/actions/action';

const x = state => ({
    Data : state
})

const y = dispatch => ({
    AddToCardHandlers : data => dispatch(AddToCartAction(data))
})

export default connect(x,y)(Book);