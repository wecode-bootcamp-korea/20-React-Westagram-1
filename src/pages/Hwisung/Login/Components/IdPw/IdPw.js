import React from 'react';
import './IdPw.scss';

class IdPw extends React.Component {
  constructor() {
    super();
    this.state = {
      InputId: '',
      InputPw: '',
    };
  }
  handleIdInput = event => {
    this.setState({
      InputId: `${event.target.value}`,
    });
    console.log(`${event.target.value}`);
  };
  handlePwInput = event => {
    this.setState({
      InputPw: `${event.target.value}`,
    });
    console.log(`${event.target.value}`);
  };

  render() {
    return (
      <>
        <input
          class="id_input"
          type="text"
          placeholder="전화번호, 사용자이름 또는 이메일"
          onChange={this.handleIdInput}
        />
        <input
          class="pw_input"
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
        />
      </>
    );
  }
}
export default IdPw;
