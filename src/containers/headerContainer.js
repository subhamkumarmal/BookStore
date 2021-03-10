import {connect} from 'react-redux';
import header from '../Header';

const x = state =>({
    Data : state
})

const y = dispatch =>({

})

export default connect(x,y)(header);