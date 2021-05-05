import React, { Component } from 'react';
import User from '../User/User';
import SectionRight from '../SectionRight/SectionRight';
import './MainRight.scss';

class MainRight extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      recommendations: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Yeseul/storyData.json')
      .then(stories => stories.json())
      .then(stories =>
        this.setState({
          stories: stories,
        })
      );
    fetch('http://localhost:3000/data/Yeseul/recommendationData.json')
      .then(recommendations => recommendations.json())
      .then(recommendations =>
        this.setState({
          recommendations: recommendations,
        })
      );
  }

  render() {
    const { stories, recommendations } = this.state;
    const { user } = this.props;
    return (
      <div className="main-right">
        <div className="user-profile">
          <User size="big" user={user}>
            <button className="align-right" type="button">
              전환
            </button>
          </User>
        </div>
        <SectionRight title="스토리" users={stories} />
        <SectionRight title="회원님을 위한 추천" users={recommendations}>
          <button type="button" className="follow align-right">
            팔로우
          </button>
        </SectionRight>
      </div>
    );
  }
}

export default MainRight;
