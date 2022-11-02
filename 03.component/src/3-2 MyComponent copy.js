import PropTypes from 'prop-types'

// function MyComponent() {} 이렇게도 작성 가능 = ES5버전
// 아래부터는 ES 6버전

// const MyComponent = (props) => { /* 괄호는 한줄일때는 생략가능, 두줄이상이면 괄호 해주어야. */
    // const {name, children} = props /* 비구조 할당(?) */
const MyComponent = ({name, forNumber, children}) => {    
    return ( 
        <div>
            <div>props.name 값은 {name} 새로운 My컴포넌트 입니다.</div> <br/>
            칠드런 값은 {children} 입니다.
            <br/>
            좋아하는 숫자는 {forNumber} forNumber로 불러온 숫자 입니다
        </div>
    )
}

MyComponent.defaultProps = {
    name: '디폴트프롭스,  프롭스가 없는데도 프롭스를 사용할 수 있다(?)'
}

MyComponent.propTypes = { /* 프롭스로 불러올 name의 type이 string인지, propTypes 쓰기위해서는 맨위에 import 해줘야. */
    name: PropTypes.string,
    forNumber: PropTypes.number.isRequired /* isRequired: 필수값 검증  */
}





//외부로 내보내기 위해서 export 실행.
export default MyComponent
