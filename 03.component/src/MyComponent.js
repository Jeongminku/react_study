import PropTypes from 'prop-types'
import { Component } from 'react'

class MyComponent extends Component{
    static defaultProps = { /* 디폴트프롭스를 static을 사용하여 안에 설정함 */
        name: '디폴트프롭스,  프롭스가 없는데도 프롭스를 사용할 수 있다(?)'
    }
    
    static propTypes = { /* 프롭타입스를 static을 사용하여 안에 설정함 */
        name: PropTypes.string,
        forNumber: PropTypes.number.isRequired /* isRequired: 필수값 검증  */
    }
    
    render() {
        const { name, forNumber, children } = this.props /* this라는것은 현재의 객체를 뜻함.(?) */
        return ( 
            <div>
                <div>props.name 값은 {name} 새로운 My컴포넌트 입니다.</div> <br/>
                칠드런 값은 {children} 입니다.
                <br/>
                좋아하는 숫자는 {forNumber} forNumber로 불러온 숫자 입니다
            </div>
        )
    }
}

import {  } from 'module';

// 디폴트프롭스, 프롭프롭스를 밖에 설정함
// MyComponent.defaultProps = {
//     name: '디폴트프롭스,  프롭스가 없는데도 프롭스를 사용할 수 있다(?)'
// }

// MyComponent.propTypes = { /* 프롭스로 불러올 name의 type이 string인지, propTypes 쓰기위해서는 맨위에 import 해줘야. */
//     name: PropTypes.string,
//     forNumber: PropTypes.number.isRequired /* isRequired: 필수값 검증  */
// }





//외부로 내보내기 위해서 export 실행.
export default MyComponent

