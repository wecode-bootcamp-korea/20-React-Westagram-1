import React from 'react';
import './Comment.scss';
import '../../../../../Styles/Yeonju/reset.scss';
import '../../../../../Styles/Yeonju/common.scss';

class Comment extends React.Component {
  render() {
    console.log(`this.props`, this.props);
    // console.log(comment);

    const { comment } = this.props;
    return (
      <form>
        <li>{comment}</li>
      </form>
    );
  }
}
//여기서 {comment}는 {this.pros,comment} 인자로 받아준 요소 중 comment인 것!
//this.state와 마찬가지로 this.props도 구조분해 핼당하여 props명과 같은 변수를 만들어 간략하게 적어줄 수 있다.

export default Comment;
