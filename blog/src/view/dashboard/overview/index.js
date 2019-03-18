import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
import CountUp from 'react-countup'

const overviewData = [
	{
		icon: "bulb",
		title: "原创",
		count: 49,
		twoToneColor: "rgb(100, 234, 145)"
	},
	{
		icon: "eye",
		title: "访问",
		count: 160000,
		twoToneColor: "rgb(143, 201, 251)"
	},
	{
		icon: "message",
		title: "评论",
		count: 2000,
		twoToneColor: "rgb(216, 151, 235)"
	},
	{
		icon: "heart",
		title: "喜欢",
		count: 2000,
		twoToneColor: "rgb(246, 152, 153)"
	}
]
class Overview extends Component {

  render() {
    return (
		    <Row gutter={16}>
				{overviewData.map((overview) =>
		      <Col className="gutter-row" span={6} key={overview.title}>
		        <div className="gutter-box flex bgwh pd32">
							<Icon
								className="f54 pr14"
								type={overview.icon}
								theme="twoTone"
								twoToneColor={overview.twoToneColor} />
							<div>
								<p className="f16 pb10">{overview.title}</p>
								<p className="f32">
									<CountUp
				            start={0}
				            end={overview.count}
				            duration={2.75}
				            useEasing
				            useGrouping
				            separator=","
									/>
								</p>
							</div>
						</div>
		      </Col>
				)}
		    </Row>
    );
  }
}

export default Overview;
