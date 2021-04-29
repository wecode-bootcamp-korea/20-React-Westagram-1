import React from 'react';
import './IdPw.scss';

class IdPw extends React.Component {
  render() {
    return (
      <>
        <input
          class="id_input"
          type="text"
          placeholder="전화번호, 사용자이름 또는 이메일"
        />
      </>
    );
  }
}
export default IdPw;
